USE [siisspolwebresp]
GO

/****** Object:  Table [dbo].[tipo_licor]    Script Date: 31/7/2019 21:34:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tipo_articulo](
	[id_tipo_articulo] [int] IDENTITY(1,1) NOT NULL,
	[decripcion] [varchar](100) NOT NULL,
	[codigo] [varchar](100) NOT NULL,
	[estado] [bit] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_id_tipo_articulo] PRIMARY KEY CLUSTERED 
(
	[id_tipo_articulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[tipo_articulo] ADD  DEFAULT ((1)) FOR [estado]
GO

ALTER TABLE [dbo].[tipo_articulo] ADD  CONSTRAINT [DF_tipo_articulo_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO


