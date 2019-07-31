USE [siisspolwebresp]
GO


/****** Object:  Table [dbo].[auto]    Script Date: 11/07/2019 17:38:19 ******/
--DROP TABLE [dbo].[tipo_licor]
--GO

/****** Object:  Table [dbo].[auto]    Script Date: 11/07/2019 17:38:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tipo_licor](
	[id_tipo_licor] [int] IDENTITY(1,1) NOT NULL,
	[decripcion] [varchar](100) NOT NULL,
	[estado] [bit] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_id_tipo_licor] PRIMARY KEY CLUSTERED 
(
	[id_tipo_licor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[tipo_licor] ADD  DEFAULT ((1)) FOR [estado]
GO

ALTER TABLE [dbo].[tipo_licor] ADD  CONSTRAINT [DF_tipo_licor_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO


