import React, { Component } from "react"
import firebase from "firebase"
import Container from "./container"
import Text from "./../../dumbComp/FormElements/Text"
import Channel from "./../../dumbComp/Channel"


const MAX_BIO_LENGTH = 60;
const defaultUserImg = "http://www.miller3group.com/wp-content/uploads/2016/09/person-placeholder-300x300.jpg"

class Profile extends Component {

  state = {
    formValues: {},
    isFetchingFormData: true,
  }

  componentDidMount() {
    const { user } = this.props.firebase
    const { uid } = user || {}
    const { history } = this.props
    if(!uid) {
      history.push("/")
    }else{
      this.getDataFromFirebase();
    }
  }

  getDataFromFirebase = () => {
    const db = firebase.database();
    const { user } = this.props.firebase
    const { uid } = user || {}
    const userRef = db.ref(`users/${uid}`)
    .once("value")
    .then( snap => {
      console.log("Dara", snap.val());
      const values = snap.val()
      this.setState({
        isFetchingFormData: false,
        formValues: {
          ...values,
        },
      })
    })
    .catch(err => {
      console.log("error", err);
    })
  }

  handleSave = (e) => {
    const { state, props } = this
    const { uid } = props.firebase.user
    if (e) e.preventDefault();
    const { formValues } = this.state
    if(uid){
      const db = firebase.database();
      const userRef = db.ref(`users/${uid}`)
      .set({
        ...formValues,
      })
      .then(res => {
        console.log("saved", res);
      })
      .catch(err => {
        console.log("failed", err);
      })
    }
  }

  handleInput = (e) => {
    const { formValues } = this.state
    this.setState({
      formValues: {
        ...formValues,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleProfilePicUpload = () => {
    console.log("file upload", this);
    this.profilePic.click()
  }

  handleFileUpload = () => {
    const file = this.profilePic.files && this.profilePic.files[0] || null
    if(file){
      const { uid } = this.props.firebase.user
      const meta = { contentType: file.type }
      const ref = firebase.storage().ref(`${uid}`);
      this.setState({
        isUploadingProifilePic: true
      })
      const task = ref.child(`${file.name}`)
      .put(file, meta)
      .then(snap => {
        console.log(snap);
        const { formValues } = this.state
        this.setState({
          isUploadingProifilePic: false,
          formValues: {
            ...formValues,
            userImg: snap.downloadURL,
          }
        }, () => {
          this.handleSave();
        })
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isUploadingProifilePic: false,
        })
      })
    }
  }

  render() {
    const { formValues } = this.state
    const {
      firstName,
      lastName,
      bio,
      facebookProfile,
      twitterHandler,
      userImg
    } = formValues || {}
    return(
      <div className="page profile">
        <div className="wrapper">
          <div className="modal_creator">
            <form action="" onSubmit={this.handleSave}>
              <div className="user_img_wrap">
                <div
                  className="img_holder"
                  style={{backgroundImage: `url(${userImg || defaultUserImg})` }}
                  onClick={this.handleProfilePicUpload}
                >
                  <input
                    type="file"
                    name="progilepic"
                    ref={ele => this.profilePic = ele}
                    onChange={this.handleFileUpload}
                  />
                  <img src="https://i.pinimg.com/originals/24/64/d3/2464d3627c6ccdf2d5952f0c5ef51963.png" alt=""/>
                  <h6>Upload Image</h6>
                </div>
              </div>
              <h5 className="label">Basic Info</h5>
              <Text
                name="firstName"
                value={firstName}
                onChange={this.handleInput}
                placeholder="eg, Raman"
                label="Enter your first name"/>
              <Text
                name="lastName"
                value={lastName}
                onChange={this.handleInput}
                placeholder="eg, Raman"
                label="Enter your Last Name"/>
              <Text
                name="bio"
                error={bio && bio.length > MAX_BIO_LENGTH}
                value={bio}
                onChange={this.handleInput}
                placeholder="eg, Raman"
                errorMessage={`Max length allowed ${MAX_BIO_LENGTH}`}
                label="Tell you about you"/>
              { bio && <h6>{`${bio.length}/${MAX_BIO_LENGTH}`}</h6> }
              <Text
                name="facebookProfile"
                value={facebookProfile}
                onChange={this.handleInput}
                placeholder="eg, https://facebook.com/ramanchoudhry"
                errorMessage={`Please Enter a Valid URL`}
                label="Facebook Profile URL"
              />
              <Text
                name="twitterHandler"
                value={twitterHandler}
                onChange={this.handleInput}
                placeholder="eg, https://twitter.com/ramanchoudhry"
                errorMessage={`Please Enter a Valid URL`}
                label="Twitter Handle"
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Container(Profile)
