USE [siisspolwebresp]
GO

/****** Object:  Table [pmedicas].[prestador]    Script Date: 11/07/2019 16:35:13 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ruta](
	[id_ruta] [int] IDENTITY(1,1) NOT NULL,
	[puestos_disponibles]      int not null,
	[puestos_ocupados]         int not null ,
	[asientos]				   int not null,
	[origen]			[varchar](100) NULL,
	[destino]		    [varchar](100) NULL,
	[lat_origen]        [varchar](100) NULL,
	[long_origen]       [varchar](100) NULL,
	[lat_destino]       [varchar](100) NULL,
	[long_destino]      [varchar](100) NULL,
	[fecha_programada]   [datetime] NOT NULL,
	[estado]		           bit,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL	
 CONSTRAINT [PK_app_ruta] PRIMARY KEY CLUSTERED 
(
	[id_ruta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ruta] ADD  CONSTRAINT [DF_ruta_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO

ALTER TABLE [dbo].[ruta] ADD  DEFAULT ((1)) FOR [estado]
GO


