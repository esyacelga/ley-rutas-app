USE [siisspolwebresp]
GO
IF ( SELECT isnull(OBJECT_DEFINITION(OBJECT_ID('dbo.proc_crud_tipo_usuario_persona')),'')) != ''
    DROP PROCEDURE dbo.proc_crud_tipo_usuario_persona
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/******************************************************************
    Archivo:           [proc_crud_tipo_usuario_persona].sql				  
    SP:                [proc_crud_tipo_usuario_persona]                         
    Base de datos:     siisspolweb.persona                     
    Producto:          Módulo Afiliado                         
    Fecha de escritura: 12-12-2017                                 
*******************************************************************
				    IMPORTANTE                               
    Este programa es parte de los módulos propiedad del ISSPOL     
    Su uso no autorizado queda expresamente prohibido, así como     
    cualquier alteración o agregado hecho por alguno de sus     
    usuarios sin el debido consentimiento por escrito.             
*******************************************************************
                        PROPOSITO                              
	Registro de usuarios, y envio de correo de cambio de clave     			 
*******************************************************************
                        PARAMETROS
ENTRADA
    NOMBRE                               DESCRIPCION
	@XMLVARCHAR							Items a actualizar o insertar en formato XML
SALIDA                                      
    NOMBRE                               DESCRIPCION
	@AS_MSJ								Mensaje de error			 
*******************************************************************
				  MODIFICACIONES                           
    FECHA             AUTOR					RAZON                       
    22/07/2019    	santiago.yacelga		Creacion	

*******************************************************************/ 

CREATE PROCEDURE [dbo].[proc_crud_tipo_usuario_persona]
@Ai_id_tipo_usuario_persona int OUTPUT,
@Ai_id_persona int,
@Ai_tipo_persona int,
@AB_ESTADO BIT,
@AS_CREACION_USUARIO VARCHAR(20),
@AS_CREACION_EQUIPO VARCHAR(20),
@AS_MSJ VARCHAR(500) OUTPUT 
AS
BEGIN
DECLARE @LD_FECHA_ACTUAL datetime

set @LD_FECHA_ACTUAL = comun.func_fecha_actual ();


if (@Ai_id_tipo_usuario_persona is null)
begin 

	INSERT INTO [dbo].[tipo_usuario_persona]
			   ([id_persona]
			   ,[id_tipo_persona]
			   ,[estado]
			   ,[creacion_usuario]
			   ,[creacion_fecha]
			   ,[creacion_equipo]
			   ,[modifica_usuario]
			   ,[modifica_fecha]
			   ,[modifica_equipo])
		 VALUES
			   (
				@Ai_id_persona
			   ,@Ai_tipo_persona
			   ,1
			   ,@AS_CREACION_USUARIO
			   ,@LD_FECHA_ACTUAL
			   ,@AS_CREACION_EQUIPO
			   ,@AS_CREACION_USUARIO
			   ,@LD_FECHA_ACTUAL
			   ,@AS_CREACION_EQUIPO
			   )
			   SET @Ai_id_tipo_usuario_persona = SCOPE_IDENTITY(); 
end 
else 
			update [dbo].[tipo_usuario_persona] 
			set estado = @AB_ESTADO 
			where id_tipo_usuario_persona = @Ai_id_tipo_usuario_persona
	


	--select * from [dbo].[tipo_usuario_persona]

	return 1

END