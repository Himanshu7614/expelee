export default `
body{
    display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;

}

.loader {
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.loader div {
  height: 30px;
  width: 30px;
  position: absolute;
  animation: move 4s infinite;
}

.loader div:nth-child(1) {
  background-color: rgb(158, 136, 246);
  box-shadow: rgb(158, 136, 246) 0px 7px 29px 0px;
  transform: translate(-30px,-30px);
  animation-delay: -1s;
}

.loader div:nth-child(2) {
  background-color: rgb(97, 183, 253);
  box-shadow: rgb(97, 183, 253) 0px 7px 29px 0px;
  transform: translate(30px,-30px);
  animation-delay: -2s;
}

.loader div:nth-child(3) {
  background-color: rgb(95, 249, 175);
  box-shadow: rgb(95, 249, 175) 0px 7px 29px 0px;
  transform: translate(30px,30px);
  animation-delay: -3s;
}

.loader div:nth-child(4) {
  background-color: #10E0F9;
  box-shadow: #10E0F9 0px 7px 29px 0px;
  transform: translate(-30px,30px);
  animation-delay: -4s;
}

@keyframes move {
  0% {
    transform: translate(-30px, -30px);
  }

  25% {
    transform: translate(30px, -30px);
  }

  50% {
    transform: translate(30px, 30px);
  }

  75% {
    transform: translate(-30px, 30px);
  }

  100% {
    transform: translate(-30px, -30px);
  }
}

`