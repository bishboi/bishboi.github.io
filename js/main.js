

$(window).on('load',function() {
    // Animate loader off screen
    $(".spinner-wrapper").fadeOut("slow");;
});

/*scroll down-------------------------------------*/
$(function() {
	$('a[href*="#"]').on("click", function(e) {
		e.preventDefault();
		$("html, body").animate(
			{ scrollTop: $($(this).attr("href")).offset().top },500,"linear");
	});
});


/*
------------------------------------------------------------------------------------------------------------------
animation
------------------------------------------------------------------------------------------------------------------
*/


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  /*
------------------------------------------------------------------------------------------------------------------
animation Closed
------------------------------------------------------------------------------------------------------------------
*/


  /*
------------------------------------------------------------------------------------------------------------------
FOOOOOOOOTERRRRRRRRRRRRRRR START
------------------------------------------------------------------------------------------------------------------
*/


let states = {
  neutral: {
      //Post your other emotions as a comment
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 0,
              position: 0
          }
      },
      right: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 0,
              position: 0
          }
      }
  },
  happy: {
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 20,
              position: 40
          },
          upper: {
              rotation: 0,
              position: 0
          }
      },
      right: {
          lower: {
              rotation: -20,
              position: 40
          },
          upper: {
              rotation: 0,
              position: 0
          }
      }
  },
  sad: {
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: -20,
              position: 40
          }
      },
      right: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 20,
              position: 40
          }
      }
  },
  close: {
      face: {
          rotationX: -20,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 0,
              position: 45
          },
          upper: {
              rotation: 0,
              position: 45
          }
      },
      right: {
          lower: {
              rotation: 0,
              position: 45
          },
          upper: {
              rotation: 0,
              position: 45
          }
      }
  },
  angry: {
      face: {
          rotationX: -10,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 20,
              position: 40
          }
      },
      right: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: -20,
              position: 40
          }
      }
  },
  confused: {
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 0,
              position: 40
          }
      },
      right: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 0,
              position: 0
          }
      }
  },
  suspicious: {
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: -4,
              position: 20
          },
          upper: {
              rotation: 4,
              position: 20
          }
      },
      right: {
          lower: {
              rotation: 4,
              position: 20
          },
          upper: {
              rotation: -4,
              position: 20
          }
      }
  },
  pain: {
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 10,
              position: 20
          },
          upper: {
              rotation: -10,
              position: 20
          }
      },
      right: {
          lower: {
              rotation: -10,
              position: 20
          },
          upper: {
              rotation: 10,
              position: 20
          }
      }
  },
  unamused: {
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0
      },
      left: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 0,
              position: 40
          }
      },
      right: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 0,
              position: 40
          }
      }
  },
  unsure: {
      face: {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 7
      },
      left: {
          lower: {
              rotation: 10,
              position: 20
          },
          upper: {
              rotation: -10,
              position: 20
          }
      },
      right: {
          lower: {
              rotation: 0,
              position: 0
          },
          upper: {
              rotation: 0,
              position: 0
          }
      }
  }
};

const setState = state => {
  console.log(state);
  if (states[state] == undefined) return;
  $(".face").attr(
      "style",
      `
      --left-lower-rotation:${states[state].left.lower.rotation}deg;
      --left-lower-position:${states[state].left.lower.position}%;
      --left-upper-rotation:${states[state].left.upper.rotation}deg;
      --left-upper-position:${states[state].left.upper.position}%;
      --right-lower-rotation:${states[state].right.lower.rotation}deg;
      --right-lower-position:${states[state].right.lower.position}%;
      --right-upper-rotation:${states[state].right.upper.rotation}deg;
      --right-upper-position:${states[state].right.upper.position}%;
      --face-rotation-x:${states[state].face.rotationX}deg;
      --face-rotation-y:${states[state].face.rotationY}deg;
      --face-rotation-z:${states[state].face.rotationZ}deg;
  `
  );
};
console.log("Test");
let emotions = Object.keys(states);
//let index = 3;
let previous = [];
setState("happy");

const nextState = () => {
  let ind = Math.floor(Math.random() * emotions.length);
  if (previous.indexOf(ind) != -1) return nextState();
  previous.push(ind);
  previous = previous.slice(-4); //Save most recent 4 states to not use
  return ind;
};

setInterval(() => {
  setState(emotions[nextState()]);
  //setState(emotions[index%emotions.length]);
  //index++;
}, 1500);

  /*
------------------------------------------------------------------------------------------------------------------
FOOOOOOOOTERRRRRRRRRRRRRRR CLOSED
------------------------------------------------------------------------------------------------------------------
*/



  

