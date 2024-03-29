USE [siisspolwebresp]
GO
IF ( SELECT isnull(OBJECT_DEFINITION(OBJECT_ID('dbo.proc_crud_direccion')),'')) != ''
    DROP PROCEDURE [dbo].[proc_crud_direccion]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/******************************************************************
    Archivo:           [proc_crud_direccion].sql				  
    SP:                [proc_crud_direccion]                         
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

CREATE PROCEDURE [dbo].[proc_crud_direccion]
@Ai_id_direccion int OUTPUT,
@Ai_id_persona int,
@Ai_id_sector int,
@AS_calle_principal VARCHAR(100),
@AS_calle_secundaria VARCHAR(100),
@AB_ESTADO BIT,
@AS_CREACION_USUARIO VARCHAR(20),
@AS_CREACION_EQUIPO VARCHAR(20),
@AS_MSJ VARCHAR(500) OUTPUT 
AS
BEGIN
DECLARE @LD_FECHA_ACTUAL datetime

set @LD_FECHA_ACTUAL = comun.func_fecha_actual ();


if (@Ai_id_direccion is null)
begin 
	INSERT INTO [dbo].[direccion]
			   ([id_persona]
			   ,[id_sector]
			   ,[calle_principal]
			   ,[calle_secundaria]
			   ,[estado]
			   ,[creacion_usuario]
			   ,[creacion_fecha]
			   ,[creacion_equipo]
			   ,[modifica_usuario]
			   ,[modifica_fecha]
			   ,[modifica_equipo])
		 VALUES
			   (@Ai_id_persona
			   ,@Ai_id_sector
			   ,@AS_calle_principal
			   ,@AS_calle_secundaria
			   ,@AB_ESTADO
			   ,@AS_CREACION_USUARIO
			   ,@LD_FECHA_ACTUAL
			   ,@AS_CREACION_EQUIPO
			   ,@AS_CREACION_USUARIO
			   ,@LD_FECHA_ACTUAL
			   ,@AS_CREACION_EQUIPO
			   )

	SET @Ai_id_direccion = SCOPE_IDENTITY(); 
	end
else 
	begin 
		UPDATE   [dbo].[direccion]
		SET id_sector = @Ai_id_sector,
		calle_principal = @AS_calle_principal, calle_secundaria = @AS_calle_secundaria
		, estado = @AB_ESTADO , 
		 modifica_usuario = @AS_CREACION_USUARIO,
		 modifica_fecha = @LD_FECHA_ACTUAL
		,modifica_equipo = @AS_CREACION_EQUIPO
		WHERE id_direccion = @Ai_id_direccion
		
	end


	return 1

END