USE [siisspolwebresp]
GO


/****** Object:  Table [dbo].[licor]    Script Date: 31/7/2019 21:03:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[articulo](
	[id_articulo] [int] IDENTITY(1,1) NOT NULL,
	[id_tipo_articuki] [int] NOT NULL,
	[descripcion] [varchar](100) NULL,
	[foto] [image] NULL,
	[costo] [money] NULL,
	[estado] [bit] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_licor] PRIMARY KEY CLUSTERED 
(
	[id_articulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[articulo] ADD  DEFAULT ((1)) FOR [estado]
GO

ALTER TABLE [dbo].[articulo] ADD  CONSTRAINT [DF_articulo_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO

ALTER TABLE [dbo].[licor]  WITH CHECK ADD  CONSTRAINT [FK_tipo_articulo] FOREIGN KEY([id_articulo_licor])
REFERENCES [dbo].[tipo_licor] ([id_tipo_licor])
GO

ALTER TABLE [dbo].[licor] CHECK CONSTRAINT [FK_tipo_licor]
GO


