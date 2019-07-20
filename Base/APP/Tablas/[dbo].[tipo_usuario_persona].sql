USE [siisspolwebresp]
GO

/****** Object:  Table [pmedicas].[prestador_convenio]    Script Date: 11/07/2019 17:22:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tipo_usuario_persona](
	[id_tipo_usuario_persona] [int] IDENTITY(1,1) NOT NULL,
	[id_persona] [int] not NULL,
	[id_tipo_persona] [int] not NULL,
	[estado] [bit] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_tipo_usuario_persona] PRIMARY KEY CLUSTERED 
(
	[id_tipo_usuario_persona] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[tipo_usuario_persona] ADD  CONSTRAINT [DF_tipo_usuario_persona_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO


ALTER TABLE [dbo].[tipo_usuario_persona]  WITH CHECK ADD  CONSTRAINT [FK_persona_tipo] FOREIGN KEY([id_persona])
REFERENCES [dbo].[persona] ([id_persona])
GO

ALTER TABLE [dbo].[tipo_usuario_persona] CHECK CONSTRAINT [FK_persona_tipo] 
GO

ALTER TABLE [dbo].[tipo_usuario_persona]  WITH CHECK ADD  CONSTRAINT [FK_persona_usuario] FOREIGN KEY([id_tipo_persona])
REFERENCES [dbo].[tipo_persona] ([id_tipo_persona])
GO

ALTER TABLE [dbo].[tipo_usuario_persona]CHECK CONSTRAINT [FK_persona_usuario]
GO

