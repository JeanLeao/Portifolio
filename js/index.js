particlesJS("particles-js", {
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#3d8b09", "#90EE90", "#8FBC8F", "#00FA9A"]
      },
      shape: {
        type: ["edge", "triangle"],
        stroke: {
          width: 1,
          color: "#fff"
        },
        polygon: {
          nb_sides: 100
        }
      },
      opacity: {
        value: 0.6,
        random: false,
        anim: {
          enable: true,
          speed: 0.01,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 0.1,
          size_min: 10,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: false
  });
  