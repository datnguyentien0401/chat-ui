import React, { Component } from "react";
import {
  ChatList,
  MessageList,
  Input,
  Button,
  SideBar,
  Dropdown,
  Popup
} from "react-chat-elements";
import "./style.css";
// import FaSearch from "react-icons/lib/fa/search";
import {
  FaComments,
  FaSearch,
  FaClose as FaWindowClose,
  FaMenu,
  FaSquare
} from "react-icons/fa";
import { loremIpsum } from "lorem-ipsum";
import "react-chat-elements/dist/main.css";
// import Identicon from "identicon";

export default class Chat2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      messageList: []
    };
  }

  componentWillMount() {
    // setInterval(this.addMessage.bind(this), 3000);
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  token() {
    return parseInt((Math.random() * 10) % 6);
  }

  photo(size) {
    return "',-(:";
  }
  // photo(size) {
  //   return new Identicon(String(Math.random()) + String(Math.random()), {
  //     margin: 0,
  //     size: size || 20
  //   }).toString();
  // }

  random(type) {
    switch (type) {
      case "message":
        var type = this.token();
        var status = "waiting";
        switch (type) {
          case 0:
            type = "photo";
            status = "sent";

            /*
            <MessageBox
    position={'left'}
    type={'photo'}
    text={'react.svg'}
    data={{
        uri: 'https://facebook.github.io/react/img/logo.svg',
        status: {
            click: false,
            loading: 0,
        }
    }}/>
             */

            return {
              position: "left",
              type: "photo",
              text: "react.svg",
              data: {
                // uri: `data:image/png;base64,${this.photo(150)}`,
                uri:
                  "https://www.happeningandfriends.com/uploads/happening/products/46/004554/mock_ST_newSadCat.jpg",
                status: {
                  click: false,
                  loading: 0
                },
                // status: {
                //   click: true,
                //   loading: 0.5
                // },
                size: "10MB",
                width: 200,
                height: 200,
                // latitude: "37.773972",
                // longitude: "-122.431297",
                staticURL:
                  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY"
              }
            };
            break;
          case 1:
            type = "file";
            status = "sent";
            break;
          case 2:
            type = "system";
            status = "received";
            break;
          case 3:
            type = "location";
            break;
          case 4:
            type = "spotify";
            break;
          default:
            type = "text";
            status = "read";
            break;
        }
        return {
          position: this.token() >= 1 ? "right" : "left",
          forwarded: true,
          type: type,
          theme: "white",
          view: "list",
          title: loremIpsum({ count: 2, units: "words" }),
          titleColor: this.getRandomColor(),
          text:
            type === "spotify"
              ? "spotify:track:7wGoVu4Dady5GV0Sv4UIsx"
              : loremIpsum({ count: 1, units: "sentences" }),
          // data: {
          //   uri: `data:image/png;base64,${this.photo(150)}`,
          //   status: {
          //     click: true,
          //     loading: 0.5
          //   },
          //   size: "100MB",
          //   width: 300,
          //   height: 300,
          //   latitude: "37.773972",
          //   longitude: "-122.431297",
          //   staticURL:
          //     "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY"
          // },
          onLoad: () => {
            console.log("Photo loaded");
          },
          status: status,
          date: +new Date(),
          avatar: `data:image/png;base64,${this.photo()}`
        };
      case "chat":
        return {
          id: String(Math.random()),
          avatar: `data:image/png;base64,${this.photo()}`,
          avatarFlexible: true,
          statusColor: "lightgreen",
          statusColorType:
            parseInt((Math.random() * 100) % 2) === 1 ? "encircle" : undefined,
          alt: loremIpsum({ count: 2, units: "words" }),
          title: loremIpsum({ count: 2, units: "words" }),
          date: new Date(),
          subtitle: loremIpsum({ count: 1, units: "sentences" }),
          unread: parseInt((Math.random() * 10) % 3),
          dropdownMenu: (
            <Dropdown
              animationPosition="norteast"
              title="Dropdown Title"
              buttonProps={{
                type: "transparent",
                color: "#cecece",
                icon: {
                  component: <FaMenu />,
                  size: 24
                }
              }}
              items={[
                {
                  icon: {
                    component: <FaSquare />,
                    float: "left",
                    color: "red",
                    size: 22
                  },
                  text: "Menu Item"
                },
                {
                  icon: {
                    component: <FaSquare />,
                    float: "left",
                    color: "purple",
                    size: 22
                  },
                  text: "Menu Item"
                },
                {
                  icon: {
                    component: <FaSquare />,
                    float: "left",
                    color: "yellow",
                    size: 22
                  },
                  text: "Menu Item"
                }
              ]}
            />
          )
        };
      default:
        return {
          position: this.token() >= 1 ? "right" : "left",
          forwarded: true,
          type: type,
          theme: "white",
          view: "list",
          title: loremIpsum({ count: 2, units: "words" }),
          titleColor: this.getRandomColor(),
          text:
            type === "spotify"
              ? "spotify:track:7wGoVu4Dady5GV0Sv4UIsx"
              : loremIpsum({ count: 1, units: "sentences" }),
          data: {
            uri: `data:image/png;base64,${this.photo(150)}`,
            status: {
              click: true,
              loading: 0.5
            },
            size: "100MB",
            width: 300,
            height: 300,
            latitude: "37.773972",
            longitude: "-122.431297",
            staticURL:
              "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-circle+FF0000(LONGITUDE,LATITUDE)/LONGITUDE,LATITUDE,ZOOM/270x200@2x?access_token=KEY"
          },
          onLoad: () => {
            console.log("Photo loaded");
          },
          status: status,
          date: +new Date(),
          avatar: `data:image/png;base64,${this.photo()}`
        };
    }
  }

  addMessage() {
    var list = this.state.messageList;
    list.push(this.random("message"));
    this.setState({
      messageList: list
    });
  }

  render() {
    var arr = [];
    for (var i = 0; i < 5; i++) arr.push(i);

    var chatSource = arr.map((x) => this.random("chat"));

    return (
      <div className="container">
        {/* <div className="chat-list">
          <SideBar
            top={
              <Popup
                // show={this.state.show}
                header="Lorem ipsum dolor sit amet."
                headerButtons={[
                  {
                    type: "transparent",
                    color: "black",
                    onClick: () => {
                      this.setState({ show: false });
                    },
                    icon: {
                      component: <FaWindowClose />,
                      size: 18
                    }
                  }
                ]}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem animi veniam voluptas eius!"
                footerButtons={[
                  {
                    color: "white",
                    backgroundColor: "#ff5e3e",
                    text: "Vazgeç"
                  },
                  {
                    color: "white",
                    backgroundColor: "lightgreen",
                    text: "Tamam"
                  }
                ]}
              />
            }
            center={<ChatList dataSource={chatSource} />}
            bottom={
              <span>
                <Button
                  type="transparent"
                  color="black"
                  icon={{
                    component: <FaComments />,
                    size: 18
                  }}
                />
                <Button
                  type="transparent"
                  color="black"
                  icon={{
                    component: <FaSearch />,
                    size: 18
                  }}
                />
                <Button text="Count" />
              </span>
            }
          />
        </div> */}
        <div className="right-panel">
          <MessageList
            className="message-list"
            lockable={true}
            downButton={true}
            toBottomHeight={"100%"}
            dataSource={this.state.messageList}
            onScroll={() => {
              console.log("onScroll");
            }}
          />
          <div className={"input-message"}>
            <Input
              placeholder="Write your message here."
              defaultValue=""
              ref="input"
              multiline={true}
              // buttonsFloat='left'
              onKeyPress={(e) => {
                if (e.shiftKey && e.charCode === 13) {
                  return true;
                }
                if (e.charCode === 13) {
                  this.refs.input.clear();
                  this.addMessage();
                  e.preventDefault();
                  return false;
                }
              }}
              rightButtons={
                <Button text="Send" onClick={this.addMessage.bind(this)} />
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
