<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="project-container absolute w-full flex justify-center items-center">
    <div class="project-content relative flex flex-col">
      <div class="window-info flex justify-between">
        <div class="window-name h-full flex items-center">
          <img src="/images/desktop/folder.png" />
          <span>Projects</span>
        </div>

        <div class="window-buttons flex">
          <button class="btn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 8v1H3V8h11z"></path></svg>
          </button>
          <button class="btn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"></path></svg>
          </button>
          <router-link class="btn" :to="{ name: 'home' }">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg>
          </router-link>
        </div>
      </div>

      <div class="window-edit flex">
        <div class="edit-new">
          <div class="edit-new-content flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            </svg>
            <span>New</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
              </g>
            </svg>
          </div>
        </div>

        <div class="file-explorer flex items-center">
          <div class="file-explorer-content flex items-center">
            <div class="explorer-icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"></path></svg>
            </div>
            <div class="explorer-icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
              </svg>
            </div>
            <div class="explorer-icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path>
              </svg>
            </div>
            <div class="explorer-icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2zm-14 4H15v4H6.005z"></path>
                <path d="M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995v-2.005zm-13-2v-8h11v8h-11z"></path>
              </svg>
            </div>
            <div class="explorer-icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M561.938 158.06L417.94 14.092C387.926-15.922 336 5.097 336 48.032v57.198c-42.45 1.88-84.03 6.55-120.76 17.99-35.17 10.95-63.07 27.58-82.91 49.42C108.22 199.2 96 232.6 96 271.94c0 61.697 33.178 112.455 84.87 144.76 37.546 23.508 85.248-12.651 71.02-55.74-15.515-47.119-17.156-70.923 84.11-78.76V336c0 42.993 51.968 63.913 81.94 33.94l143.998-144c18.75-18.74 18.75-49.14 0-67.88zM384 336V232.16C255.309 234.082 166.492 255.35 206.31 376 176.79 357.55 144 324.08 144 271.94c0-109.334 129.14-118.947 240-119.85V48l144 144-144 144zm24.74 84.493a82.658 82.658 0 0 0 20.974-9.303c7.976-4.952 18.286.826 18.286 10.214V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h132c6.627 0 12 5.373 12 12v4.486c0 4.917-2.987 9.369-7.569 11.152-13.702 5.331-26.396 11.537-38.05 18.585a12.138 12.138 0 0 1-6.28 1.777H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6v-25.966c0-5.37 3.579-10.059 8.74-11.541z"
                ></path>
              </svg>
            </div>
            <div class="explorer-icon">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div class="edit-new">
          <div class="edit-new-content flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h2V8h3L8 4 4 8h3zm13-4h-3V4h-2v12h-3l4 4z"></path></svg>
            <span>Sort</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
              </g>
            </svg>
          </div>
        </div>

        <div class="edit-new">
          <div class="edit-new-content flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
            <span>View</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
              </g>
            </svg>
          </div>
        </div>

        <div class="more-options flex items-center">
          <div class="options-icon">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </div>
        </div>
      </div>

      <div class="window-search flex items-center">
        <div class="window-arrows flex items-center">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: white"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
            </g>
          </svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </div>

        <div class="window-folder flex grow">
          <div class="window-left flex items-center">
            <img src="/images/desktop/folder.png" />
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="0.7rem" width="0.7rem" xmlns="http://www.w3.org/2000/svg"><path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path></svg>
            <span>Projects</span>
          </div>
          <div class="window-right ml-auto flex items-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
              </g>
            </svg>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"></path></svg>
          </div>
        </div>

        <div class="window-input h-full flex items-center grow">
          <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"></path></svg>

          <input type="text" placeholder="Search: Projects" />
        </div>
      </div>

      <div class="project flex flex-grow">
        <div class="folder-search flex flex-col">
          <div class="folder-file folder-opener flex items-center">
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
              </g>
            </svg>
            <img src="/images/folder/desktop.png" />
            <span>Quick access</span>
          </div>

          <div class="quick-access-content flex flex-col">
            <div class="folder-file flex items-center">
              <img src="/images/folder/desktop.png" />
              <span>Desktop</span>
            </div>
            <div class="folder-file flex items-center">
              <img src="/images/folder/desktop.png" />
              <span>Downloads</span>
            </div>
            <div class="folder-file flex items-center">
              <img src="/images/folder/desktop.png" />
              <span>Documents</span>
            </div>
            <div class="folder-file flex items-center">
              <img src="/images/folder/desktop.png" />
              <span>Pictures</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.project-container {
  height: $desktop-h;
}

.project-content {
  width: 850px;
  height: 500px;
  background-color: #191919;
  border: 1px solid #323232;
  border-radius: 10px;
  z-index: 2;

  .window-info {
    padding-left: 5px;
    height: 2rem;
    background-color: #202020;

    .window-name {
      gap: 5px;

      & > img {
        height: 20px;
      }

      & > span {
        font-size: 0.7rem;
      }
    }

    .window-buttons {
      gap: 5px;

      & > .btn {
        display: flex;
        align-items: center;
        padding: 0 10px;
        &:hover {
          background-color: #2e2e2e;
        }
      }
      & > .btn:last-child {
        border-top-right-radius: 10px;
        padding: 0 15px;
        &:hover {
          background-color: red;
        }
      }
    }
  }

  .window-edit {
    font-size: 0.7rem;
    font-weight: 300;
    background-color: #202020;
    & > button {
      padding: 10px;
      &:hover {
        background-color: #2e2e2e;
      }
    }

    .edit-new {
      padding: 5px 10px;
      .edit-new-content {
        padding: 10px;
        gap: 5px;
        border-radius: 5px;
        &:hover {
          background-color: #2e2e2e;
        }
      }
    }

    .file-explorer {
      padding: 0 10px;
      border-width: 0 1px;
      border-style: solid;
      border-color: #32323285;
      .explorer-icon {
        opacity: 0.5;
        gap: 5px;
        padding: 10px;
      }
    }
  }

  .more-options {
    padding: 0 10px;
    border-left: 1px solid #32323285;
    .options-icon {
      padding: 10px;
      gap: 5px;
      border-radius: 5px;
      &:hover {
        background-color: #2e2e2e;
      }
    }
  }

  .window-search {
    padding: 10px 0;
    .window-arrows {
      padding: 0 10px;
      gap: 8px;
      & > svg:not(:first-child) {
        opacity: 0.5;
      }
    }
  }

  .window-folder {
    flex-basis: 300px;
    font-size: 0.7rem;
    border: 1px solid #85858585;

    .window-left {
      padding: 5px;
      & > img {
        height: 16.5px;
      }
      & > span {
        margin-left: 5px;
      }
    }

    .window-right {
      gap: 20px;
      padding-right: 10px;
    }
  }

  .window-input {
    margin: 0 10px;
    padding: 0 5px;
    border: 1px solid #85858585;
    gap: 10px;
    input {
      color: gray;
      width: 100%;
      height: 100%;
      padding: 5px;
      border: none;
      background-color: transparent;
      outline: none;
      font-size: 0.7rem;
    }
    ::placeholder {
      color: gray;
    }
  }
}

.project {
  font-size: 0.7rem;

  .folder-search {
    gap: 4px;
    flex-basis: 150px;
    padding: 3px;
    .folder-file:hover {
      background-color: #2e2e2e;
    }
    .folder-opener {
      cursor: pointer;
      padding: 5px;
      gap: 5px;
    }

    img {
      height: 16px;
    }

    .quick-access-content {
      gap: 5px;
      .folder-file {
        cursor: pointer;
        padding: 5px 40px;
        gap: 5px;
      }
    }
  }
}
</style>
