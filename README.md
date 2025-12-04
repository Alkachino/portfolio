# CodeCanvas

This is a Next.js portfolio website bootstrapped with Firebase Studio.

To get started, take a look at `src/app/page.tsx`.
To edit the content of the portfolio, modify the data in `src/lib/data.ts`.

---

## Cómo subir este proyecto a un nuevo repositorio de GitHub

Sigue estos pasos en tu terminal para crear un nuevo repositorio llamado `portfolio` y subir tu código.

**Asume que ya has creado un repositorio vacío en GitHub llamado "portfolio".**

1.  **Inicializa Git en tu proyecto (si no lo has hecho):**
   ```bash
   git init -b main
   ```

2.  **Añade y confirma tus archivos:**
   ```bash
   git add .
   git commit -m "Initial commit: My portfolio project"
   ```

3.  **Enlaza tu proyecto local con el repositorio de GitHub:**
   *Reemplaza `<TU_USUARIO_DE_GITHUB>` con tu nombre de usuario.*

   Si recibes el error `remote origin already exists`, primero ejecuta este comando para eliminar el enlace existente:
    ```bash
    git remote remove origin
    ```
   Luego, ejecuta el siguiente comando para añadir el enlace correcto:
   ```bash
   git remote add origin https://github.com/<TU_USUARIO_DE_GITHUB>/portfolio.git
   ```

4.  **Sube tu código a GitHub:**
   ```bash
   git push -u origin main
   ```
