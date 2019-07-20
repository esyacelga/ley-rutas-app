USE [siisspolwebresp]
GO

ALTER TABLE [dbo].[auto] DROP CONSTRAINT [DF_auto_creacion_fecha]
GO

ALTER TABLE [dbo].[auto] DROP CONSTRAINT [DF__auto__estado__2D88A7DD]
GO

/****** Object:  Table [dbo].[auto]    Script Date: 11/07/2019 17:38:19 ******/
DROP TABLE [dbo].[auto]
GO

/****** Object:  Table [dbo].[auto]    Script Date: 11/07/2019 17:38:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[auto](
	[id_auto] [int] IDENTITY(1,1) NOT NULL,
	[marca] [varchar](100) NOT NULL,
	[placa] [varchar](100) NOT NULL,
	[color] [varchar](100) NOT NULL,
	[anio] [int] NOT NULL,
	[asientos] [int] NOT NULL,
	[estado] [bit] NULL,
	[IMAGEN] [image] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_app_auto] PRIMARY KEY CLUSTERED 
(
	[id_auto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[auto] ADD  DEFAULT ((1)) FOR [estado]
GO

ALTER TABLE [dbo].[auto] ADD  CONSTRAINT [DF_auto_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO


