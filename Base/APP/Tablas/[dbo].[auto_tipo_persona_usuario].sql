USE [siisspolwebresp]
GO

/****** Object:  Table [pmedicas].[prestador_convenio]    Script Date: 11/07/2019 17:22:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[auto_tipo_persona_usuario](
	[id_auto_tipo_persona_usuario] [int] IDENTITY(1,1) NOT NULL,
	[id_tipo_usuario_persona] [int] not NULL,
	[id_auto] [int] not NULL,
	[estado] [bit] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_auto_tipo_persona_usuario] PRIMARY KEY CLUSTERED 
(
	[id_auto_tipo_persona_usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[auto_tipo_persona_usuario] ADD  CONSTRAINT [DF_auto_tipo_persona_usuario_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO


ALTER TABLE [dbo].[auto_tipo_persona_usuario] WITH CHECK ADD  CONSTRAINT [FK_auto] FOREIGN KEY([id_auto])
REFERENCES [dbo].[auto] ([id_auto])
GO

ALTER TABLE [dbo].[auto_tipo_persona_usuario] CHECK CONSTRAINT [FK_auto] 
GO


ALTER TABLE [dbo].[auto_tipo_persona_usuario]  WITH CHECK ADD  CONSTRAINT [FK_tipo_persona_usuario] FOREIGN KEY([id_tipo_usuario_persona])
REFERENCES [dbo].[tipo_usuario_persona]([id_tipo_usuario_persona])
GO


ALTER TABLE [dbo].[auto_tipo_persona_usuario] CHECK CONSTRAINT [FK_tipo_persona_usuario]
GO

