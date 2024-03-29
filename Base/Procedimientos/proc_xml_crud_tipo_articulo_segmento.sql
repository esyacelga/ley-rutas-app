USE siisspolwebresp
go
IF ( SELECT isnull(OBJECT_DEFINITION(OBJECT_ID('dbo.proc_xml_crud_tipo_articulo_segmento')),'')) != ''
    DROP PROCEDURE dbo.proc_xml_crud_tipo_articulo_segmento;
GO
create PROCEDURE [dbo].[proc_xml_crud_tipo_articulo_segmento]
@XMLVARCHAR VARCHAR(MAX),
@XMLADUITORIAVARCHAR VARCHAR(MAX),
@AS_XML VARCHAR(500) OUTPUT,
@AS_MSJ VARCHAR(500) OUTPUT
AS
begin
  DECLARE @XMLOBJ  as XML
  DECLARE @XMLAUD  as XML
  DECLARE @IDSOLICITUD INT, @TAREA INT, @ROL INT, @USUARIO VARCHAR (100), @ELIMINADO BIT, @ls_equipo varchar(100)
  set @XMLOBJ = cast(@XMLVARCHAR as xml)
  set @XMLAUD = cast(@XMLADUITORIAVARCHAR as xml)
  declare @ad_fecha date
  declare @id int
    
  declare @temporal table (id int identity,
						   idTipoArticuloSegmento int,
						   idTipoArticulo int,
						   tdescripcion varchar (100),
						   Testado bit, 
						   crea_usr varchar (100), crea_fec date, crea_eq varchar (100),
						   mod_usr varchar (100), mod_fec date, mod_eq varchar (100))
	
	set @USUARIO =	 comun.func_xml_obtener_auditoria(@XMLADUITORIAVARCHAR,'usuario')
	set @ad_fecha =  comun.func_fecha_actual()
	set @ls_equipo=	 comun.func_xml_obtener_auditoria(@XMLADUITORIAVARCHAR,'equipo')

	--select * from [dbo].[tipo_articulo]
	select 
		@id = isnull(x.v.value('idTipoArticuloSegmento[1]', 'int'),0)
		FROM @XMLOBJ.nodes('/root') x(v)
	
	if (@id = 0	)
		insert into [dbo].[tipo_articulo_segmento]
		select 
		x.v.value('idTipoArticulo[1]', 'int'),
		x.v.value('descripcion[1]', 'varchar(100)'),
		1,
		@USUARIO, 
		@ad_fecha,
		@ls_equipo,
		@USUARIO, 
		@ad_fecha,
		@ls_equipo
		FROM @XMLOBJ.nodes('/root') x(v)
	else 
		begin
		insert into @temporal
		select 
		x.v.value('idTipoArticuloSegmento[1]', 'int'),
		x.v.value('idTipoArticulo[1]', 'int'),
		x.v.value('descripcion[1]', 'varchar(100)'),
		isnull(x.v.value('estado[1]', 'bit'),1),
		@USUARIO, 
		@ad_fecha,
		@ls_equipo,
		@USUARIO, 
		@ad_fecha,
		@ls_equipo
		FROM @XMLOBJ.nodes('/root') x(v)

		update [dbo].[tipo_articulo_segmento] 
		set descripcion = tdescripcion,
		estado = Testado,
		id_tipo_articulo= idTipoArticulo
		from @temporal
		where id_tipo_articulo_segmento  = idTipoArticuloSegmento


		end
		
--	select * from [dbo].[tipo_articulo_segmento]
--	UPDATE [dbo].[tipo_articulo]  SET estado = 1
	return 1
end

