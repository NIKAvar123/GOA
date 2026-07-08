const axios = require("axios");

async function main() {
  try {
    // 2. ყველა მომხმარებლის წამოღება
    const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = usersResponse.data;

    console.log("All users:");
    console.log(users);

    // 3. პირველი მომხმარებლის სახელი
    console.log("First user's name:");
    console.log(users[0].name);

    // 4. ერთი მომხმარებლის წამოღება ID-ით
    const userResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    console.log("User with ID = 1:");
    console.log(userResponse.data);

    // 5. ყველა პოსტის წამოღება
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = postsResponse.data;

    console.log("All posts:");
    console.log(posts);

    // 6. პირველი 5 პოსტის სათაური
    console.log("First 5 post titles:");
    posts.slice(0, 5).forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();