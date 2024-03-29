USE [siisspolwebresp]
GO
IF ( SELECT isnull(OBJECT_DEFINITION(OBJECT_ID('dbo.proc_crud_persona')),'')) != ''
    DROP PROCEDURE dbo.proc_crud_persona
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

/******************************************************************
    Archivo:           [proc_xml_registrar_persona].sql				  
    SP:                [proc_xml_registrar_persona]                         
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

CREATE PROCEDURE [dbo].[proc_crud_persona]
@Ai_id_persona int OUTPUT,
@AS_NOMBRE VARCHAR(100),
@AS_APELLIDO_PATERNO VARCHAR(100),
@AS_APELLIDO_MATERNO VARCHAR(100),
@AS_IDENTIFICACION VARCHAR(13),
@ad_fecha_nacimiento date, 
@AS_TELEFONO VARCHAR(13),
@AS_CEULAR VARCHAR(13),
@AS_CORREO VARCHAR(13),
@AB_ESTADO BIT,
@AS_CREACION_USUARIO VARCHAR(20),
@AS_CREACION_EQUIPO VARCHAR(20),
@AS_MSJ VARCHAR(500) OUTPUT 
AS
BEGIN
DECLARE @LD_FECHA_ACTUAL datetime

set @LD_FECHA_ACTUAL = comun.func_fecha_actual ();


if (@Ai_id_persona is null)
begin 
	INSERT INTO [dbo].[persona]
           ([nombre]
           ,[apellido_paterno]
           ,[apellido_materno]
           ,[identificacion]
		   ,fecha_nacimiento
           ,[telefono]
           ,[celular]   ,[correo]         ,[estado]         ,[creacion_usuario]          ,[creacion_fecha]
           ,[creacion_equipo]
           ,[modifica_usuario]
           ,[modifica_fecha]
           ,[modifica_equipo])
     VALUES
           (
			@AS_NOMBRE
           ,@AS_APELLIDO_PATERNO
           ,@AS_APELLIDO_MATERNO
           ,@AS_IDENTIFICACION
		   ,@ad_fecha_nacimiento
           ,@AS_TELEFONO
           ,@AS_CEULAR
           ,@AS_CORREO
           ,1
           ,@AS_CREACION_USUARIO
           ,@LD_FECHA_ACTUAL
           ,@AS_CREACION_EQUIPO
           ,@AS_CREACION_USUARIO
           ,@LD_FECHA_ACTUAL
           ,@AS_CREACION_EQUIPO
		   )

	SET @Ai_id_persona = SCOPE_IDENTITY(); 
	end
else 
	begin 
		UPDATE  [dbo].[persona]
		SET nombre = @AS_NOMBRE,
		apellido_paterno = @AS_APELLIDO_PATERNO
		,apellido_materno = @AS_APELLIDO_MATERNO
		,telefono = @AS_TELEFONO
		,celular = @AS_CEULAR
		,fecha_nacimiento = @ad_fecha_nacimiento
		,correo = @AS_CORREO
		,estado = @AB_ESTADO
		,modifica_usuario = @AS_CREACION_USUARIO,
		modifica_fecha = @LD_FECHA_ACTUAL
		,modifica_equipo = @AS_CREACION_EQUIPO
		WHERE id_persona = @Ai_id_persona

	end

	--select  @Ai_id_persona

	return 1

END