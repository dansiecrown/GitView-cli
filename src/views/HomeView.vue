<template>
  <main class="home-container">
    <div class="home-wrapper">
      <div class="app-desc">
        <div class="git">
          <img
            class="gitImg"
            src="../assets/gitImg.png"
            alt="Github Logo"
            width="50"
          />
          <h1>GitVIEW</h1>
        </div>
        <p>
          Welcome to our GitHub repository viewer application! With our
          easy-to-use application, you can easily view a list of all your GitHub
          repositories, sort them by name, date, or size, and even search for
          specific repositories by name. You can also view details about each
          repository, such as its description, language, and last updated time.
          With our application, managing your GitHub repositories has never been
          easier.
        </p>

        <RouterLink to="/repos" class="btn">Start Now</RouterLink>
      </div>

      <div class="profile">
        <h3 class="profile-title">Default Profile</h3>
        <div class="card">
          <img src="../assets/danImg.jpg" alt="Profile" class="profile-img" />
          <div class="card-title-container">
            <span class="card-title-name">Username</span>
            <p class="card-title">Dansiecrown</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
}

.home-wrapper {
  width: 80%;
  margin: auto;

  padding: 1rem;
  display: flex;

  justify-content: space-between;
  gap: 20px;
}

.git {
  display: flex;
  align-items: center;
  gap: 10px;
}

.gitImg {
  display: block;
}

.git h1 {
  font-weight: 100;
  font-size: 4rem;
  margin: 0;
}

.app-desc {
  width: 70%;
  padding-right: 20px;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: yellowgreen;
}

a:hover {
  background-color: #595959;
}

.app-desc p {
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 40px;
}

.profile {
  width: 30%;
  border: 1px solid #033422;
  border-radius: 0 0 1rem 1rem;
  margin: auto;
  padding-bottom: 1rem;
}

.profile-title {
  text-align: center;
  margin-bottom: 20px;
  color: white;
  background-color: #033422;
  margin-top: 0;
}

.card {
  width: 80%;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.profile-img {
  width: 100%;
  padding-top: 0;
  margin: auto;
  margin-top: 0;
}

.profile-img:hover {
  opacity: 0.8;
}

.card-title-container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.card-title {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
}

.card-title-name {
  font-size: 0.8rem;
  font-style: italic;
  color: yellowgreen;
}

@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
    gap: 60px;
  }

  .app-desc {
    width: 100%;
    padding-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .profile {
    display: none;
  }
}
</style>
