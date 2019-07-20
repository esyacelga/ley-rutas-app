USE [siisspolwebresp]
GO
IF ( SELECT isnull(OBJECT_DEFINITION(OBJECT_ID('dbo.proc_xml_consultas_app')),'')) != ''
    DROP PROCEDURE dbo.proc_xml_consultas_app
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/******************************************************************
    Archivo:           proc_xml_consultas_app.sql				  
    Procedimiento:     proc_xml_consultas_app                        
    Base de datos:     siisspolweb.pmedicas                     
    Producto:          Módulo Prestaciones Medicas                         
    Fecha de escritura: 02/07/2019
*******************************************************************
				    IMPORTANTE                               
    Este programa es parte de los modulos propiedad del ISSPOL     
    Su uso no autorizado queda expresamente prohibido asi como     
    cualquier  alteración  o  agregado hecho por alguno de sus     
    usuarios sin el debido consentimiento por escrito.             
*******************************************************************
                        PROPÓSITO                              
	Inserta expediente y expediten objecion
*******************************************************************
					PARÁMETROS
ENTRADA	
	NOMBRE								DESCRIPCIÓN
	@XMLVARCHAR							XML ENVIADO
	@XMLADUITORIAVARCHAR				XML AUDITORÍA
SALIDA
	NOMBRE								DESCRIPCIÓN
	@AS_XML								MENSAJE DE SALIDA
	@AS_MSJ								MENSAJE DE SALIDA 
*******************************************************************
				  MODIFICACIONES                           
    FECHA          AUTOR		            RAZON                       
	02/07/2017	  santiago.yacelga			Creación

*******************************************************************/
CREATE PROCEDURE dbo.proc_xml_consultas_app
@XMLVARCHAR VARCHAR(MAX),
@XMLADUITORIAVARCHAR VARCHAR(MAX),
@AS_XML VARCHAR(MAX) OUTPUT,
@AS_MSJ VARCHAR(MAX) OUTPUT

AS
begin
  DECLARE @XMLOBJ  as XML
  DECLARE @XMLAUD  as XML
  DECLARE @LS_TIPO_CONSULTA VARCHAR(100)
  set @XMLOBJ = cast(@XMLVARCHAR as xml)
  set @XMLAUD = cast(@XMLADUITORIAVARCHAR as xml)
  declare @AS_SQL varchar(max)
  declare @AS_SQLOPCION nvarchar(MAX), @li_prestador varchar(100) , @li_tipoTran varchar(100)
  declare @LS_FILTRO VARCHAR(100), @ls_fecha_ini varchar(100), @ls_fecha_fin varchar(100)
  declare @LI_ID_INTANCIA int, @LI_ID_TRAMITE INT, @LI_ID_LOTE INT, @LI_ID_CIUDAD_PRESTADOR INT
  DECLARE @LI_PROCESO INT, @LS_ID_PRESTADOR VARCHAR(100)
  DECLARE @LS_USUARIO VARCHAR(20), @LS_EQUIPO VARCHAR(20), @LS_NUMERO_TRAMITE VARCHAR(100)
    
	select 
			@LS_TIPO_CONSULTA = isnull( x.v.value('tipoConsulta[1]', 'varchar(100)'), '0'),
			@LI_ID_TRAMITE = isnull( x.v.value('idTramite[1]', 'int'), '0'),	
	     	@LI_ID_INTANCIA = isnull( x.v.value('idInstancia[1]', 'int'), '0')
	FROM @XMLOBJ.nodes('/root') x(v)


	SET @LS_USUARIO = comun.func_xml_obtener_auditoria(@XMLADUITORIAVARCHAR,'usuario') 
	SET @LS_EQUIPO = comun.func_xml_obtener_auditoria(@XMLADUITORIAVARCHAR,'equipo') 
	--VALIDACION DE DATO EN NULO	
	if '0'=(@LS_TIPO_CONSULTA)
	BEGIN 
		SET @AS_MSJ = 'No se ha enviado el parametro de consulta'
		RETURN 0
	END


		
	if 'SECTORES'=(@LS_TIPO_CONSULTA)
	BEGIN

		 set @AS_SQLOPCION = 
		           '
						SELECT ID_SECTOR as idSector, DESCRIPCION as descripcion FROM dbo.SECTOR
					'
	end
	

		

	
	set @AS_MSJ = ''
    SET @AS_SQLOPCION = [comun].[func_generar_query](@AS_SQLOPCION)
    exec sp_executeSQl @AS_SQLOPCION, N'@xml2 varchar(max) output', @AS_XML output


	return 1
end  