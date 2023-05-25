// document.addEventListener("DOMContentLoaded", () => {
//   // Get all the filter links, posts, and the reset button
//   const tagLinks = document.querySelectorAll(".tag-filter a");
//   const optionLinks = document.querySelectorAll(".options-filter a");
//   const allPosts = document.querySelectorAll(".post");
//   const postsContainer = document.querySelector(".posts");
//   const resetButton = document.querySelector(".reset");

//   // Create an array to hold the filtered posts
//   let postsToFilter = Array.from(allPosts);

//   // Attach event listeners to the filter links
//   tagLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       if (!link.classList.contains("selected")) {
//         clearSelected(tagLinks);
//         link.classList.add("selected");
//       }
//       filterPosts();
//     });
//   });

//   // Attach event listeners to the filter links
//   optionLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       if (!link.classList.contains("selected")) {
//         clearSelected(optionLinks);
//         link.classList.add("selected");
//       }
//       filterPosts();
//     });
//   });

//   // Attach an event listener to the reset button
//   resetButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     clearSelected(tagLinks);
//     clearSelected(optionLinks);
//     filterPosts();
//   });

//   // Clear the 'selected' class from all filter links except the one that was clicked
//   function clearSelected(links) {
//     links.forEach((link) => {
//       if (link !== this) {
//         link.classList.remove("selected");
//       }
//     });
//   }

//   function filterPosts() {
//     const selectedTag = getSelectedValue(tagLinks);
//     const selectedOption = getSelectedValue(optionLinks);

//     // Filter the posts based on the selected tag and option
//     postsToFilter = Array.from(allPosts).filter((post) => {
//       const postTag = Array.from(post.classList).find(
//         (className) => className !== "post"
//       );
//       const hasTag = !selectedTag || postTag === selectedTag;
//       const hasOption =
//         !selectedOption || post.classList.contains(selectedOption);
//       return hasTag && hasOption;
//     });

//     // Render the filtered posts
//     renderPosts();

//     // Get all the options that are not used by the filtered posts or are not compatible with the selected tag
//     const unusedOptions = new Set();
//     optionLinks.forEach((link) => {
//       const option = link.textContent.trim();
//       const optionClass = option.toLowerCase().replace(" ", "-");
//       const optionIsUnused = !postsToFilter.some((post) =>
//         post.classList.contains(optionClass)
//       );
//       const optionIsIncompatible =
//         selectedTag &&
//         !postsToFilter.some((post) =>
//           post.classList.contains(selectedTag.toLowerCase())
//         );
//       if (optionIsUnused || optionIsIncompatible) {
//         unusedOptions.add(option);
//       }
//     });

//     // Hide the unused options
//     optionLinks.forEach((link) => {
//       if (unusedOptions.has(link.textContent.trim())) {
//         link.classList.add("hidden");
//       } else {
//         link.classList.remove("hidden");
//       }
//     });
//   }

//   // Get the value of the selected filter link
//   function getSelectedValue(links) {
//     const selectedLink = Array.from(links).find((link) =>
//       link.classList.contains("selected")
//     );
//     return selectedLink ? selectedLink.textContent.trim() : null;
//   }

//   // Render the posts to the screen
//   function renderPosts() {
//     // Remove all the existing posts from the container
//     postsContainer.innerHTML = "";

//     // Add the filtered posts to the container
//     postsToFilter.forEach((post) => {
//       postsContainer.appendChild(post);
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  // Get all the filter links, posts, and the reset button
  const tagLinks = document.querySelectorAll(".tag-filter a");
  const optionLinks = document.querySelectorAll(".options-filter a");
  const allPosts = document.querySelectorAll(".post");
  const postsContainer = document.querySelector(".posts");
  const resetButton = document.querySelector(".reset");
  const loadMoreButton = document.querySelector(".load-more");

  // Create an array to hold the filtered posts
  let postsToFilter = Array.from(allPosts);

  // Set the number of posts to show initially and for each "Load More" click
  let postsToShow = 3;

  // Attach event listeners to the filter links
  tagLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (!link.classList.contains("selected")) {
        clearSelected(tagLinks);
        link.classList.add("selected");
      }
      filterPosts();
    });
  });

  // Attach event listeners to the filter links
  optionLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (!link.classList.contains("selected")) {
        clearSelected(optionLinks);
        link.classList.add("selected");
      }
      filterPosts();
    });
  });

  // Attach an event listener to the reset button
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearSelected(tagLinks);
    clearSelected(optionLinks);
    filterPosts();
  });

  // Clear the 'selected' class from all filter links except the one that was clicked
  function clearSelected(links) {
    links.forEach((link) => {
      if (link !== this) {
        link.classList.remove("selected");
      }
    });
  }

  function filterPosts() {
    const selectedTag = getSelectedValue(tagLinks);
    const selectedOption = getSelectedValue(optionLinks);

    // Filter the posts based on the selected tag and option
    postsToFilter = Array.from(allPosts).filter((post) => {
      const postTag = Array.from(post.classList).find(
        (className) => className !== "post"
      );
      const hasTag = !selectedTag || postTag === selectedTag;
      const hasOption =
        !selectedOption || post.classList.contains(selectedOption);
      return hasTag && hasOption;
    });

    // Reset the number of posts to show
    postsToShow = 3;

    // Render the filtered posts
    renderPosts();
  }

  // Get the value of the selected filter link
  function getSelectedValue(links) {
    const selectedLink = Array.from(links).find((link) =>
      link.classList.contains("selected")
    );
    return selectedLink ? selectedLink.textContent.trim() : null;
  }

  // Render the posts to the screen
  function renderPosts() {
    // Remove all the existing posts from the container
    postsContainer.innerHTML = "";

    // Add the filtered posts to the container
    const postsToShowSlice = postsToFilter.slice(0, postsToShow);
    postsToShowSlice.forEach((post) => {
      postsContainer.appendChild(post);
    });

    // Check if there are more posts to show
    const hasMorePosts = postsToShow < postsToFilter.length;

    // Add the "Load More" button if there are more posts
    if (hasMorePosts) {
      loadMoreButton.addEventListener("click", loadMorePosts);
    }
  }

  // Function to load more posts
  function loadMorePosts() {
    // Increment the number of posts to show
    postsToShow += 3;

    // Render the updated posts
    renderPosts();
  }

  // Initially render the posts
  renderPosts();
});
