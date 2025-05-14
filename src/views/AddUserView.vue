<template>
  <div class="add-user-container">
    <h2>Add New User</h2>
    <form @submit.prevent="addUser" class="user-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newUser.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="newUser.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="newUser.password" required>
      </div>
      <button type="submit" class="submit-button">Add User</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AddUserView',
  setup() {
    const newUser = ref({
      name: '',
      email: '',
      password: ''
    });

    const addUser = () => {
      // Here you would typically handle the logic to add the new user
      // This could involve making an API call to your backend
      console.log('New user data:', newUser.value);
      // Reset the form after submission
      newUser.value = {
        name: '',
        email: '',
        password: ''
      };
      // You might want to show a success message or redirect the user
    };

    return {
      newUser,
      addUser
    };
  }
});
</script>

<style scoped>
.add-user-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.user-form .form-group {
  margin-bottom: 15px;
}

.user-form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.user-form input[type="text"],
.user-form input[type="email"],
.user-form input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.submit-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>