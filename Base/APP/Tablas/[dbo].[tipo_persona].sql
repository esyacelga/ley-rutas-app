USE [siisspolwebresp]
GO

/****** Object:  Table [pmedicas].[prestador]    Script Date: 11/07/2019 16:35:13 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[tipo_persona](
	[id_tipo_persona] [int] IDENTITY(1,1) NOT NULL,
	[descripcion]      [varchar](100) NULL,
	[estado]		 bit not null,
	[creacion_usuario] [varchar](20) NOT NULL,
	[creacion_fecha] [datetime] NOT NULL,
	[creacion_equipo] [varchar](20) NOT NULL,
	[modifica_usuario] [varchar](20) NOT NULL,
	[modifica_fecha] [datetime] NOT NULL,
	[modifica_equipo] [varchar](20) NOT NULL	
 CONSTRAINT [PK_app_tipo_persona] PRIMARY KEY CLUSTERED 
(
	[id_tipo_persona] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[tipo_persona] ADD  CONSTRAINT [DF_persona_creacion_fecha]  DEFAULT (getdate()) FOR [creacion_fecha]
GO

ALTER TABLE [dbo].[tipo_persona] ADD  DEFAULT ((1)) FOR [estado]
GO


