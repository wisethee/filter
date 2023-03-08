document.addEventListener('DOMContentLoaded', () => {

  // Add filter functionality
  // // Get all the filter links and posts
  //   const tagLinks = document.querySelectorAll('.tag-filter a');
  //   const optionLinks = document.querySelectorAll('.options-filter a');
  //   const allPosts = document.querySelectorAll('.post');
  //   const postsContainer = document.querySelector('.posts');
  //
  // // Create an array to hold the filtered posts
  //   let postsToFilter = Array.from(allPosts);
  //
  // // Attach event listeners to the filter links
  //   tagLinks.forEach(link => {
  //     link.addEventListener('click', e => {
  //       e.preventDefault();
  //       if (!link.classList.contains('selected')) {
  //         clearSelected(tagLinks);
  //         link.classList.add('selected');
  //       }
  //       filterPosts();
  //     });
  //   });
  //
  //   optionLinks.forEach(link => {
  //     link.addEventListener('click', e => {
  //       e.preventDefault();
  //       if (!link.classList.contains('selected')) {
  //         clearSelected(optionLinks);
  //         link.classList.add('selected');
  //       }
  //       filterPosts();
  //     });
  //   });
  //
  // // Clear the 'selected' class from all filter links except the one that was clicked
  //   function clearSelected(links) {
  //     links.forEach(link => {
  //       if (link !== this) {
  //         link.classList.remove('selected');
  //       }
  //     });
  //   }
  //
  // // Filter the posts based on the selected filters
  //   function filterPosts() {
  //     const selectedTag = getSelectedValue(tagLinks);
  //     const selectedOption = getSelectedValue(optionLinks);
  //
  //     // Filter the posts based on the selected tag and option
  //     postsToFilter = Array.from(allPosts).filter(post => {
  //       const postTag = Array.from(post.classList).find(className => className !== 'post');
  //       const hasTag = !selectedTag || postTag === selectedTag;
  //       const hasOption = !selectedOption || post.classList.contains(selectedOption);
  //       return hasTag && hasOption;
  //     });
  //
  //     // Render the filtered posts
  //     renderPosts();
  //   }
  //
  // // Get the value of the selected filter link
  //   function getSelectedValue(links) {
  //     const selectedLink = Array.from(links).find(link => link.classList.contains('selected'));
  //     return selectedLink ? selectedLink.textContent.trim() : null;
  //   }
  //
  // // Render the posts to the screen
  //   function renderPosts() {
  //     // Remove all the existing posts from the container
  //     postsContainer.innerHTML = '';
  //
  //     // Add the filtered posts to the container
  //     postsToFilter.forEach(post => {
  //       postsContainer.appendChild(post);
  //     });
  //   }

  // Add reset button
  ////////////////////////////////////////////////////////////
  //   // Get all the filter links, posts, and the reset button
  //   const tagLinks = document.querySelectorAll('.tag-filter a');
  //   const optionLinks = document.querySelectorAll('.options-filter a');
  //   const allPosts = document.querySelectorAll('.post');
  //   const postsContainer = document.querySelector('.posts');
  //   const resetButton = document.querySelector('.reset');
  //
  // // Create an array to hold the filtered posts
  //   let postsToFilter = Array.from(allPosts);
  //
  // // Attach event listeners to the filter links
  //   tagLinks.forEach(link => {
  //     link.addEventListener('click', e => {
  //       e.preventDefault();
  //       if (!link.classList.contains('selected')) {
  //         clearSelected(tagLinks);
  //         link.classList.add('selected');
  //       }
  //       filterPosts();
  //     });
  //   });
  //
  //   optionLinks.forEach(link => {
  //     link.addEventListener('click', e => {
  //       e.preventDefault();
  //       if (!link.classList.contains('selected')) {
  //         clearSelected(optionLinks);
  //         link.classList.add('selected');
  //       }
  //       filterPosts();
  //     });
  //   });
  //
  // // Attach an event listener to the reset button
  //   resetButton.addEventListener('click', e => {
  //     e.preventDefault();
  //     clearSelected(tagLinks);
  //     clearSelected(optionLinks);
  //     filterPosts();
  //   });
  //
  // // Clear the 'selected' class from all filter links except the one that was clicked
  //   function clearSelected(links) {
  //     links.forEach(link => {
  //       if (link !== this) {
  //         link.classList.remove('selected');
  //       }
  //     });
  //   }
  //
  // // Filter the posts based on the selected filters
  //   function filterPosts() {
  //     const selectedTag = getSelectedValue(tagLinks);
  //     const selectedOption = getSelectedValue(optionLinks);
  //
  //     // Filter the posts based on the selected tag and option
  //     postsToFilter = Array.from(allPosts).filter(post => {
  //       const postTag = Array.from(post.classList).find(className => className !== 'post');
  //       const hasTag = !selectedTag || postTag === selectedTag;
  //       const hasOption = !selectedOption || post.classList.contains(selectedOption);
  //       return hasTag && hasOption;
  //     });
  //
  //     // Render the filtered posts
  //     renderPosts();
  //   }
  //
  // // Get the value of the selected filter link
  //   function getSelectedValue(links) {
  //     const selectedLink = Array.from(links).find(link => link.classList.contains('selected'));
  //     return selectedLink ? selectedLink.textContent.trim() : null;
  //   }
  //
  // // Render the posts to the screen
  //   function renderPosts() {
  //     // Remove all the existing posts from the container
  //     postsContainer.innerHTML = '';
  //
  //     // Add the filtered posts to the container
  //     postsToFilter.forEach(post => {
  //       postsContainer.appendChild(post);
  //     });
  //   }

  // Filter the options
  ////////////////////////////////////////////////////////////
  // Get all the filter links, posts, and the reset button
  const tagLinks = document.querySelectorAll('.tag-filter a');
  const optionLinks = document.querySelectorAll('.options-filter a');
  const allPosts = document.querySelectorAll('.post');
  const postsContainer = document.querySelector('.posts');
  const resetButton = document.querySelector('.reset');

// Create an array to hold the filtered posts
  let postsToFilter = Array.from(allPosts);

// Attach event listeners to the filter links
  tagLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      if (!link.classList.contains('selected')) {
        clearSelected(tagLinks);
        link.classList.add('selected');
      }
      filterPosts();
    });
  });

  optionLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      if (!link.classList.contains('selected')) {
        clearSelected(optionLinks);
        link.classList.add('selected');
      }
      filterPosts();
    });
  });

// Attach an event listener to the reset button
  resetButton.addEventListener('click', e => {
    e.preventDefault();
    clearSelected(tagLinks);
    clearSelected(optionLinks);
    filterPosts();
  });

// Clear the 'selected' class from all filter links except the one that was clicked
  function clearSelected(links) {
    links.forEach(link => {
      if (link !== this) {
        link.classList.remove('selected');
      }
    });
  }

  // Filter the posts based on the selected filters - old version
  //   function filterPosts() {
  //     const selectedTag = getSelectedValue(tagLinks);
  //     const selectedOption = getSelectedValue(optionLinks);
  //
  //     // Filter the posts based on the selected tag and option
  //     postsToFilter = Array.from(allPosts).filter(post => {
  //       const postTag = Array.from(post.classList).find(className => className !== 'post');
  //       const hasTag = !selectedTag || postTag === selectedTag;
  //       const hasOption = !selectedOption || post.classList.contains(selectedOption);
  //       return hasTag && hasOption;
  //     });
  //
  //     // Render the filtered posts
  //     renderPosts();
  //
  //     // Get all the options that are not used by the filtered posts
  //     const unusedOptions = new Set();
  //     postsToFilter.forEach(post => {
  //       Array.from(post.classList).forEach(className => {
  //         if (className !== 'post' && !selectedOption && !post.classList.contains(selectedOption)) {
  //           unusedOptions.add(className);
  //         }
  //       });
  //     });
  //
  //     // Hide the unused options
  //     optionLinks.forEach(link => {
  //       if (unusedOptions.has(link.textContent.trim())) {
  //         link.classList.add('hidden');
  //       } else {
  //         link.classList.remove('hidden');
  //       }
  //     });
  //   }

  function filterPosts() {
    const selectedTag = getSelectedValue(tagLinks);
    const selectedOption = getSelectedValue(optionLinks);

    // Filter the posts based on the selected tag and option
    postsToFilter = Array.from(allPosts).filter(post => {
      const postTag = Array.from(post.classList).find(className => className !== 'post');
      const hasTag = !selectedTag || postTag === selectedTag;
      const hasOption = !selectedOption || post.classList.contains(selectedOption);
      return hasTag && hasOption;
    });

    // Render the filtered posts
    renderPosts();

    // Get all the options that are not used by the filtered posts or are not compatible with the selected tag
    const unusedOptions = new Set();
    optionLinks.forEach(link => {
      const option = link.textContent.trim();
      const optionClass = option.toLowerCase().replace(' ', '-');
      const optionIsUnused = !postsToFilter.some(post => post.classList.contains(optionClass));
      const optionIsIncompatible = selectedTag && !postsToFilter.some(post => post.classList.contains(selectedTag.toLowerCase()));
      if (optionIsUnused || optionIsIncompatible) {
        unusedOptions.add(option);
      }
    });

    // Hide the unused options
    optionLinks.forEach(link => {
      if (unusedOptions.has(link.textContent.trim())) {
        link.classList.add('hidden');
      } else {
        link.classList.remove('hidden');
      }
    });
  }


// Get the value of the selected filter link
  function getSelectedValue(links) {
    const selectedLink = Array.from(links).find(link => link.classList.contains('selected'));
    return selectedLink ? selectedLink.textContent.trim() : null;
  }

// Render the posts to the screen
  function renderPosts() {
    // Remove all the existing posts from the container
    postsContainer.innerHTML = '';

    // Add the filtered posts to the container
    postsToFilter.forEach(post => {
      postsContainer.appendChild(post);
    });
  }



});
