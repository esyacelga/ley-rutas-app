USE [siisspolwebresp]
GO
--drop table [dbo].[usuario]
/****** Object:  Table [pmedicas].[prestador]    Script Date: 11/07/2019 16:35:13 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[usuario](
	[id_usuario] [int] IDENTITY(1,1) NOT NULL,
	[id_tipo_usuario_persona] [int] not NULL,
	[contrasenia]      [varchar](100) NULL,
	[player_id]		   [varchar](100) NULL,
	[estado]		   bit,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL	
 CONSTRAINT [PK_app_usuario] PRIMARY KEY CLUSTERED 
(
	[id_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[usuario] ADD  CONSTRAINT [DF_usuario_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO

ALTER TABLE [dbo].[usuario] ADD  DEFAULT ((1)) FOR [estado]
GO


ALTER TABLE [dbo].[usuario]  WITH CHECK ADD  CONSTRAINT [FK_usuario_persona_usuario] FOREIGN KEY([id_tipo_usuario_persona])
REFERENCES [dbo].[tipo_usuario_persona]([id_tipo_usuario_persona])
GO


ALTER TABLE [dbo].[usuario] CHECK CONSTRAINT [FK_usuario_persona_usuario]
GO

