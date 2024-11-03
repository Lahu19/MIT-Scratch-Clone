# 🐱 MIT-Scratch Clone

This project is a clone of the Scratch site by MIT, where users can create custom games and animations using a visual coding environment. The goal is to replicate Scratch's drag-and-drop functionality, allowing users to animate multiple sprites and add interactive components.

## ✨ Features

### 🚀 Motion Animations
- **🔄 Move Steps**: Moves a sprite a specified number of steps.
- **↩️ Turn Degrees**: Rotates the sprite by a specified number of degrees.
- **📍 Go to Position**: Moves the sprite to a specific x and y coordinate.
- **🔁 Repeat Animation**: Enables repeatable actions for seamless animations.

### 🧩 Multiple Sprite Support
- **➕ Add Sprites**: Allows multiple sprites to be created and controlled individually.
- **▶️ Play Button**: Triggers all sprites' animations in sync.

### 🏅 Hero Feature: Collision-Based Animation Swap
- **🔄 Dynamic Animation Swap**: When two sprites collide, they swap animations, creating an interactive and dynamic playground. For instance, if one sprite is moving forward and the other backward, their directions swap on collision.

## 🛠️ How It Works

1. **📑 Sidebar Component Rendering**: Components are rendered in the sidebar based on specific key-value pairs. The `fetchComponents` function identifies components to display, each with default values.
2. **🎛️ Draggable Components**: Each component in the sidebar can be dragged into a central "mid area," which is another draggable space with state managed by Redux.
3. **📈 State Management**: Redux is used to manage the state of all items in the mid area. Items can be rearranged or removed, with their order and properties tracked for future reference.
4. **⚙️ Triggered Functions**: Clicking buttons within components triggers functions based on component type. A switch-case structure helps execute specific actions according to the component’s type.
5. **🎬 Run All Button**: Runs all functions within the mid area in sequence. This function takes an array of keys, executing actions with delays and maintaining a history of all operations.
6. **🗂️ History State**: Stores all actions taken in the mid area, rendering them in a history component that shows the sequence of events.

## 🚀 How to Run the Project

1. **📥 Clone the Repository**:
   ```bash
   git clone https://github.com/Lahu19/MIT-Scratch-Clone.git
   ```
2. **📦 Install Dependencies**:
   ```bash
   npm install
   ```
3. **▶️ Start the Application**:
   ```bash
   npm start
   ```
4. **🌐 Access the Application**:
   Open your browser and go to `http://localhost:8080`.

## 💻 Tech Stack

- **⚛️ React**: For building user interfaces and component-based development.
- **🗃️ Redux**: For managing the global state.
- **🔄 React DnD**: Used for implementing drag-and-drop features (Note: an older version is used for this project).
- **🧰 React Redux Toolkit**: Simplifies state management and interactions with Redux.
- **🎨 Tailwind CSS**: Provides utility-based styling for faster design and customization.

## 📜 Assignment Instructions Summary
This project implements a visual coding environment with animations and draggable components, focusing on recreating a subset of MIT Scratch's functionality. It includes essential animations, multi-sprite support, and a hero feature that swaps animations on collision.

---
