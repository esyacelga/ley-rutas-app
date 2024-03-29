USE [siisspolwebresp]
GO
IF ( SELECT isnull(OBJECT_DEFINITION(OBJECT_ID('dbo.proc_crud_usuario')),'')) != ''
    DROP PROCEDURE dbo.proc_crud_usuario
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/******************************************************************
    Archivo:           [proc_crud_usuario].sql				  
    SP:                [proc_crud_usuario]                         
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

CREATE PROCEDURE [dbo].[proc_crud_usuario]
@Ai_id_usuario int output,
@Ai_id_tipo_usuario_persona int,
@As_pass VARCHAR(100),
@As_player_id VARCHAR(100),
@AB_ESTADO BIT,
@AS_CREACION_USUARIO VARCHAR(20),
@AS_CREACION_EQUIPO VARCHAR(20),
@AS_MSJ VARCHAR(500) OUTPUT 
AS
BEGIN
DECLARE @LD_FECHA_ACTUAL datetime

set @LD_FECHA_ACTUAL = comun.func_fecha_actual ();


if (@Ai_id_usuario is null)
begin 

	
	INSERT INTO [dbo].[usuario]
           ([id_tipo_usuario_persona]
           ,[contrasenia]
           ,[player_id]
           ,[estado]
           ,[creacion_usuario]
           ,[creacion_fecha]
           ,[creacion_equipo]
           ,[modifica_usuario]
           ,[modifica_fecha]
           ,[modifica_equipo])
     VALUES
           (
		    @Ai_id_tipo_usuario_persona
           ,@As_pass
           ,@As_player_id
           ,1
           ,@AS_CREACION_USUARIO
           ,@LD_FECHA_ACTUAL
           ,@AS_CREACION_EQUIPO
           ,@AS_CREACION_USUARIO
           ,@LD_FECHA_ACTUAL
           ,@AS_CREACION_EQUIPO
		   )
		SET @Ai_id_usuario = SCOPE_IDENTITY(); 
end 
else 
			update [dbo].[usuario]
			set 
				estado = @AB_ESTADO,
				player_id = @As_player_id
				,[contrasenia] = @As_pass

			where [id_tipo_usuario_persona]  = @Ai_id_tipo_usuario_persona
	

	return 1

END