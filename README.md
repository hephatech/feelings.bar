# feelings.bar

Sitio web para bar inspirado en la experiencia de www.feelings.bar. Ambiente único, coctelería artesanal y momentos inolvidables.

## 🚀 Deploy

### Vercel (Producción)

El proyecto está configurado para deploy automático en Vercel:

1. **Push a `main`** → Trigger deploy automático
2. **URL de producción:** https://feelings-bar.vercel.app

### Configuración de Secrets (GitHub)

Configura estos secrets en GitHub (`Settings > Secrets and variables > Actions`):

| Secret | Descripción |
|--------|-------------|
| `VERCEL_TOKEN` | Token de Vercel CLI |
| `VERCEL_ORG_ID` | Org ID de Vercel |
| `VERCEL_PROJECT_ID` | Project ID de Vercel |

**Para obtener los valores:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Link proyecto
vercel link

# Mostrar IDs
vercel env ls
```

### Database (Próximo paso)

La conexión a la base de datos se configurará en Vercel:

```bash
# Configurar variables en Vercel
vercel env add DATABASE_URL
vercel env add PAYLOAD_SECRET
```

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Generar tipos de Payload
pnpm generate:types

# Iniciar servidor de desarrollo
pnpm dev
```

**URLs:**
- Sitio: http://localhost:3000
- Admin: http://localhost:3000/admin

## 🦴 Arquitectura Boneyard

El proyecto usa el patrón **boneyard** para datos:

- **`lib/boneyard.ts`** - Capa de datos centralizada
- Mock data actual → PayloadCMS en el futuro
- Todos los fetch están en un solo lugar

```typescript
// Ejemplo de uso
import { getCocktails, getEvents } from '@/lib/boneyard'

const cocktails = await getCocktails()
const events = await getEvents()
```

## 📁 Estructura

```
app/
├── sections/        # Componentes de layout
├── page.tsx         # Homepage
├── layout.tsx       # Root layout
└── globals.css      # Estilos

components/          # Componentes reutilizables
├── polaroid-frame.tsx
├── scrapbook-card.tsx
├── sticker-button.tsx
└── ...

lib/
├── boneyard.ts      # 🦴 Datos dinámicos
└── utils.ts         # Utilidades

collections/         # PayloadCMS collections (futuro)
```

## 🎨 Design System

- **Fuentes:** Space Grotesk (headlines), Newsreader (body), Courier Prime (mono)
- **Colores:** Dark `#0e0e0e`, Yellow `#fddc00`/`#ffeb92`
- **Efectos:** Noise overlay, grain, tape, hard shadows
- **Iconos:** Material Symbols (Google)

## 📄 License

MIT © 2024 HephaTech
