import Mirador from "mirador/dist/mirador.min.js";

const miradorInstance = Mirador.viewer({
  id: "app",
  selectedTheme: "dark",
  windows: [
    {
      manifestId:
        "https://sites.dlib.nyu.edu/viewer/api/presentation/books/lib000008/manifest.json",
      thumbnailNavigationPosition: "far-bottom"
    }
  ],
  window: {
    //global window defaults
    allowClose: false, // Configure if windows can be closed or not
    allowFullscreen: true, // Configure to show a "fullscreen" button in the WindowTopBar
    allowTopMenuButton: true, // Configure if window view and thumbnail display menu are visible or not
    panels: {
      // Configure which panels are visible in WindowSideBarButtons
      info: true,
      attribution: true,
      canvas: false,
      annotations: false,
      search: true,
      layers: false
    },
    sideBarOpen: true,
    allowWindowSideBar: true // Configure if side bar menu is visible or not
  },
  workspace: {
    draggingEnabled: false,
    allowNewWindows: false,
    isWorkspaceAddVisible: false, // Catalog/Workspace add window feature visible by default
    exposeModeOn: false, // unused?
    height: 5000, // height of the elastic mode's virtual canvas
    showZoomControls: true, // Configure if zoom controls should be displayed by default
    type: "mosaic" // Which workspace type to load by default. Other possible values are "elastic". If "mosaic" or "elastic" are not selected no worksapce type will be used.
  },
  workspaceControlPanel: {
    enabled: false // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
  },
  themes: {
    dark: {
      palette: {
        type: "dark",
        primary: {
          main: "#84fef2"
        },
        secondary: {
          main: "#4db6ac"
        }
      }
    }
  },
  theme: {
    typography: {
      body1: {
        fontSize: "1rem",
        letterSpacing: "0em",
        lineHeight: "1.5",
        fontWeight: 300
      },
      body2: {
        fontSize: "0.878rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em"
      },
      button: {
        fontSize: "0.878rem",
        letterSpacing: "0.09em",
        lineHeight: "2.25rem",
        textTransform: "uppercase"
      },
      caption: {
        fontSize: "0.772rem",
        letterSpacing: "0.033em",
        lineHeight: "1.6rem"
      },
      body1Next: {
        fontSize: "1rem",
        letterSpacing: "0em",
        lineHeight: "1.6em"
      },
      body2Next: {
        fontSize: "0.878rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em"
      },
      buttonNext: {
        fontSize: "0.878rem",
        letterSpacing: "0.09em",
        lineHeight: "2.25rem"
      },
      captionNext: {
        fontSize: "0.772rem",
        letterSpacing: "0.33em",
        lineHeight: "1.6rem"
      },
      overline: {
        fontSize: "0.678rem",
        fontWeight: 500,
        letterSpacing: "0.166em",
        lineHeight: "2em",
        textTransform: "uppercase"
      },
      h1: {
        fontSize: "2.822rem",
        letterSpacing: "-0.015em",
        lineHeight: "1.2em"
      },
      h2: {
        fontSize: "1.575rem",
        letterSpacing: "0em",
        lineHeight: "1.33em"
      },
      h3: {
        fontSize: "1.383rem",
        fontWeight: 300,
        letterSpacing: "0em",
        lineHeight: "1.33em"
      },
      h4: {
        fontSize: "1.215rem",
        letterSpacing: "0.007em",
        lineHeight: "1.35em",
        fontWeight: 300
      },
      h5: {
        fontSize: "1.138rem",
        letterSpacing: "0.005em",
        lineHeight: "1em"
      },
      h6: {
        fontSize: "1.067rem",
        fontWeight: 400,
        letterSpacing: "0.01em",
        lineHeight: "1.6em"
      },
      subtitle1: {
        fontSize: "0.937rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em",
        fontWeight: 300
      },
      subtitle2: {
        fontSize: "0.678rem",
        fontWeight: 300,
        letterSpacing: "0.02em",
        lineHeight: "1.75em",
        textTransform: "uppercase"
      },
      useNextVariants: true // set so that console deprecation warning is removed
    }
  }
});

console.log(miradorInstance);

// We could set this in the config if we want to if we do not want to get it from the state (or to account for multiple windows)
//const windowId = Object.keys(miradorInstance.store.getState().windows)[0];
