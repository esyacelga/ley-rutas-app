USE [siisspolwebresp]
GO


/****** Object:  Table [dbo].[licor]    Script Date: 31/7/2019 21:03:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[articulo](
	[id_articulo] [int] IDENTITY(1,1) NOT NULL,
	[id_tipo_articulo_segmento] int not null,
	[descripcion] [varchar](100) NULL,
	[cantidad] int NULL,
	[precio] money null,
	[foto] [image] NULL,
	[estado] [bit] NULL,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL,
 CONSTRAINT [PK_tid_articulo] PRIMARY KEY CLUSTERED 
(
	[id_articulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 
GO

ALTER TABLE [dbo].[articulo] ADD  DEFAULT ((1)) FOR [estado]
GO

ALTER TABLE [dbo].[articulo] ADD  CONSTRAINT [DF_articulo__creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO

ALTER TABLE [dbo].[articulo]  WITH CHECK ADD  CONSTRAINT [FK_articulo_segmento] FOREIGN KEY([id_tipo_articulo_segmento])
REFERENCES [dbo].[tipo_articulo_segmento] ([id_tipo_articulo_segmento])
GO

ALTER TABLE [dbo].[articulo] CHECK CONSTRAINT [FK_articulo_segmento]
GO


