USE [siisspolwebresp]
GO
IF( SELECT isnull(OBJECT_DEFINITION(OBJECT_ID('dbo.proc_xml_usuario_persona')), '')) != ''
    DROP PROCEDURE [DBO].[proc_xml_usuario_persona];
GO
SET ANSI_NULLS ON;
GO
SET QUOTED_IDENTIFIER ON;
GO

/******************************************************************
    Archivo:           dbo.proc_xml_usuario_persona.sql				  
    Funcion:           dbo.proc_xml_usuario_persona                     
    Base de datos:     siisspolweb.credito                    
    Producto:          Módulo Credito                         
    Fecha de escritura: 22/11/2018
*******************************************************************
				    IMPORTANTE                               
    Este programa es parte de los modulos propiedad del ISSPOL     
    Su uso no autorizado queda expresamente prohibido asi como     
    cualquier  alteración  o  agregado hecho por alguno de sus     
    usuarios sin el debido consentimiento por escrito.             
*******************************************************************
                        PROPÓSITO                              
     XML Tabla de amortización
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
    FECHA           AUTOR						RAZON  
	10/02/2019		santiago.yacelga			Creacion    
*******************************************************************/
create PROCEDURE dbo.proc_xml_usuario_persona
@XMLVARCHAR VARCHAR(MAX),
@XMLADUITORIAVARCHAR VARCHAR(MAX),
@AS_XML VARCHAR(MAX) OUTPUT,
@AS_MSJ VARCHAR(MAX) OUTPUT
 
AS
BEGIN
  DECLARE @XMLOBJ  as XML
  DECLARE @XMLAUD  as XML
  DECLARE @LS_NOMBRE VARCHAR(100), @LS_APELLIDO_PATERNO VARCHAR(100), @LS_APELLIDO_MATERNO VARCHAR(100)
          ,@AS_EQUIPO VARCHAR(100),@AS_USUARIO VARCHAR(100)
		  ,@LS_IDENTIFICACION VARCHAR(13)
		  ,@LS_TELEFONO VARCHAR(13)
		  ,@LS_CELULAR VARCHAR(20)
		  ,@LS_CORREO VARCHAR(100)
		  ,@ls_pass varchar(100)
		  ,@ls_player_id varchar(100), @ls_calle_principal varchar(100), @ls_calle_secundaria varchar(100)
	
  DECLARE @LI_RET INT, @Ai_id_persona INT, @al_id_tipo_usuario_persona int, @li_id_usuario int
		  , @li_id_direccion int, @li_sector int

  DECLARE @LB_ESTADO BIT
  declare @Ld_fecha_nacimiento date
  set @XMLOBJ = cast(@XMLVARCHAR as xml)
  set @XMLAUD = cast(@XMLADUITORIAVARCHAR as xml)

 SET @AS_EQUIPO =  comun.func_xml_obtener_auditoria(@XMLADUITORIAVARCHAR,'equipo')
 SET @AS_USUARIO = comun.func_xml_obtener_auditoria(@XMLADUITORIAVARCHAR,'usuario')

 		select  
		 @LS_CORREO = x.v.value('email[1]', 'varchar(100)'),
		 @LS_NOMBRE = x.v.value('primerNombre[1]', 'varchar(100)'),
		 @LS_APELLIDO_PATERNO = x.v.value('primerApellido[1]', 'varchar(100)'),
		 @LS_APELLIDO_MATERNO = x.v.value('segundoApellido[1]', 'varchar(100)'),
		 @LS_IDENTIFICACION = x.v.value('identificacion[1]', 'varchar(13)'),
		 @LS_TELEFONO = x.v.value('telefono[1]', 'varchar(13)'),
		 @LS_CELULAR = x.v.value('celular[1]', 'varchar(13)'),
		 @LS_CORREO = x.v.value('email[1]', 'varchar(13)'),
		 @li_sector = x.v.value('sector[1]', 'varchar(13)'),
		 @ls_calle_principal = x.v.value('callePrincipal[1]', 'varchar(13)'),
		 @ls_calle_secundaria = x.v.value('calleSecundaria[1]', 'varchar(13)'),
		 @Ld_fecha_nacimiento = x.v.value('fechaNacimiento[1]', 'date')
		FROM @XMLOBJ.nodes('/root') x(v);

  set @LB_ESTADO = 1;

  set @AS_USUARIO = isnull(@AS_USUARIO,@LS_IDENTIFICACION)

  EXEC	@LI_RET = [dbo].[proc_crud_persona]
		@Ai_id_persona = @Ai_id_persona OUTPUT,
		@AS_NOMBRE =		   @LS_NOMBRE,
		@AS_APELLIDO_PATERNO = @LS_APELLIDO_PATERNO,
		@AS_APELLIDO_MATERNO = @LS_APELLIDO_MATERNO,
		@AS_IDENTIFICACION =   @LS_IDENTIFICACION,
		@ad_fecha_nacimiento = @Ld_fecha_nacimiento, 
		@AS_TELEFONO =		   @LS_TELEFONO,
		@AS_CEULAR =           @LS_CELULAR,
		@AS_CORREO =		   @LS_CORREO,
		@AB_ESTADO =		   @LB_ESTADO,
		@AS_CREACION_USUARIO = @AS_USUARIO,
		@AS_CREACION_EQUIPO =  @AS_EQUIPO,
		@AS_MSJ = @AS_MSJ OUTPUT


		if (@LI_RET<>1)
		begin 
			set @AS_MSJ = isnull(@AS_MSJ, 'Error en [dbo].[proc_crud_persona]' )
			return -1
		end

		--select @ls_calle_principal, @ls_calle_secundaria
	
EXEC	@LI_RET = [dbo].[proc_crud_direccion]
		@Ai_id_direccion = @li_id_direccion OUTPUT,
		@Ai_id_persona = @Ai_id_persona,
		@Ai_id_sector = @li_sector,
		@AS_calle_principal = @ls_calle_principal,
		@AS_calle_secundaria = @ls_calle_secundaria,
		@AB_ESTADO = @LB_ESTADO,
		@AS_CREACION_USUARIO = @AS_USUARIO,
		@AS_CREACION_EQUIPO = @AS_EQUIPO,
		@AS_MSJ = @AS_MSJ OUTPUT

		if (@LI_RET<>1)
		begin 
			set @AS_MSJ = isnull(@AS_MSJ, 'Error en [dbo].[proc_crud_direccion]' )
			return -1
		end

			
EXEC	@LI_RET = [dbo].[proc_crud_tipo_usuario_persona]
		@Ai_id_tipo_usuario_persona = @al_id_tipo_usuario_persona OUTPUT,
		@Ai_id_persona = @Ai_id_persona,
		@Ai_tipo_persona = 1,
		@AB_ESTADO = @LB_ESTADO,
		@AS_CREACION_USUARIO = @AS_USUARIO,
		@AS_CREACION_EQUIPO = @AS_EQUIPO,
		@AS_MSJ = @AS_MSJ OUTPUT



	

		if (@LI_RET<>1)
		begin 
			set @AS_MSJ = isnull(@AS_MSJ, 'Error en [dbo].[proc_crud_tipo_usuario_persona]' )
			return -1
		end

	

EXEC	@LI_RET = [dbo].[proc_crud_usuario]
		@Ai_id_usuario = @li_id_usuario OUTPUT,
		@Ai_id_tipo_usuario_persona = @al_id_tipo_usuario_persona,
		@As_pass = @ls_pass,
		@As_player_id = @ls_player_id,
		@AB_ESTADO = @LB_ESTADO,
		@AS_CREACION_USUARIO = @AS_USUARIO,
		@AS_CREACION_EQUIPO =@AS_EQUIPO,
		@AS_MSJ = @AS_MSJ OUTPUT

		
		if (@LI_RET<>1)
		begin 
			set @AS_MSJ = isnull(@AS_MSJ, 'Error en [dbo].[proc_crud_usuario]' )
			return -1
		end


return 1

END