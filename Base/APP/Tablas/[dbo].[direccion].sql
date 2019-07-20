USE [siisspolwebresp]
GO

/****** Object:  Table [pmedicas].[prestador_convenio]    Script Date: 11/07/2019 17:22:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[direccion](
	[id_direccion] [int] IDENTITY(1,1) NOT NULL,
	[id_persona] [int] not NULL,
	[id_sector] [int] not NULL,
	[calle_principal] [int] NULL,
	[calle_secundaria] [int] NULL,
	[estado] [bit] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_direccion] PRIMARY KEY CLUSTERED 
(
	[id_direccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[direccion] ADD  CONSTRAINT [DF_direccion_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO

ALTER TABLE [dbo].[direccion]  WITH CHECK ADD  CONSTRAINT [FK_persona_direccion] FOREIGN KEY([id_persona])
REFERENCES [dbo].[persona] ([id_persona])
GO

ALTER TABLE [dbo].[direccion] CHECK CONSTRAINT [FK_persona_direccion]
GO

ALTER TABLE [dbo].[direccion]  WITH CHECK ADD  CONSTRAINT [FK_sector_direccion] FOREIGN KEY([id_sector])
REFERENCES [dbo].[sector] ([id_sector])
GO

ALTER TABLE [dbo].[direccion] CHECK CONSTRAINT [FK_sector_direccion]
GO

