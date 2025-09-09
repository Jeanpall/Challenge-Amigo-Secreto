# 🎁 Juego del Amigo Secreto

Este es un proyecto sencillo en **JavaScript, HTML y CSS** que permite organizar un sorteo de Amigo Secreto de manera rápida y divertida.

---

## ✨ Funcionalidades
El usuario puede:

- ➕ Agregar participantes a una lista.  
- 📋 Visualizar en pantalla la lista de amigos añadidos.  
- 🎲 Sortear al azar un nombre de la lista.  
- 🎉 Mostrar el resultado en pantalla.  

---

## 🚀 Tecnologías utilizadas
- **HTML5** → estructura de la aplicación.  
- **CSS3** → estilos básicos de la interfaz.  
- **JavaScript (Vanilla JS)** → lógica para añadir amigos, mostrar la lista y sortear al azar.  

---

## 📂 Estructura del proyecto
```plaintext
📁 assets
├── index.html   # Página principal
├── style.css    # Estilos de la aplicación
├── app.js    # Lógica en JavaScript
└── README.md    # Documentación
```

## ⚙️ Funcionalidades principales

### ➕ Agregar amigo
- El usuario escribe un nombre en el campo de texto.  
- Si el campo está vacío, se muestra una alerta.  
- Si es válido, el nombre se agrega a la lista.  

### 📋 Mostrar lista
- Cada vez que se agrega un amigo, se actualiza la lista en pantalla.  
- Se usa un bucle para recorrer el arreglo y generar elementos `<li>`.  

### 🎲 Sortear amigo secreto
- Se elige un índice aleatorio con `Math.random()`.  
- Se muestra en pantalla el resultado dentro de un `<ul>`.  
- Si no hay amigos en la lista, se muestra un mensaje de error.  

---

## ▶️ Cómo usarlo
1. Clona este repositorio en tu máquina:  
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo index.html en tu navegador.

3. Escribe los nombres de los participantes en el campo de texto y presiona Agregar.

4. Observa cómo se va llenando la lista.

5. Cuando tengas todos los nombres, haz clic en Sortear amigo secreto.

6. El sistema mostrará el nombre de un participante al azar 🎉.

## 📸 Capturas de ejemplo

Aquí puedes ver imágenes de la aplicación en funcionamiento:  

![Pantalla principal](https://github.com/user-attachments/assets/40691f97-c439-4022-bd5b-c002a4556532)  
*Ejemplo de la pantalla principal con la lista de amigos*  

![Resultado sorteo](https://github.com/user-attachments/assets/c3f2bdb5-9a34-45f9-a8f9-14266cf49bb5)  
*Ejemplo del resultado del sorteo del amigo secreto*  

