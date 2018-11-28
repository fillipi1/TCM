import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { updateUsers, addUser } from '../redux/actions/updateUser';
import { selectUser } from '../redux/actions/selectUser';


//UserList class maps created users in the firebase 
//database and diplays them on the left side component.


class UserList extends Component {
 
  state={
    open: false,
    open1: false,
    name: '',
    phone: '',
    email: ''
  };

  componentWillReceiveProps(nextProps) {
    if (Object.keys(this.props.activeUser).length === 0) {
        if (nextProps.usersDataBase.users.length > 0) {
            this.props.selectUser(nextProps.usersDataBase.users[0]);
        }
    }
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickOpen1 =() => {
    this.setState({ open1: true });
  };
  handleClose =() => {
    this.setState({ open: false, open1: false });
    console.log(this.state.name, this.state.phone);
  };

  handleInputName(name) {
    this.setState({ name: name.target.value });
  }

  handleInputPhone(phone) {
    this.setState({ phone: phone.target.value });
  }

  handleInputEmail(email) {
    this.setState({ email: email.target.value });
  }

  handleNewUser =() => {
    this.setState({ open: false });
    this.props.addUser(this.state.email, this.state.phone, this.state.name);
  };
  MenuPopupState() {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {popupState => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)}>
              Open Menu
            </Button>
            <Menu {...bindMenu(popupState)}>
            {this.props.usersDataBase.map(this.renderUsers)}
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  }

  renderUsers(user) {   
 return (
  <MenuItem>{user.name}</MenuItem>
 );
  }

  renderSubHeader() {
    return (
      <div>
        <Grid item>
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: 12 }}
          >
            <Typography variant='headline'>
              Add Contact
            </Typography>
            <IconButton onClick={this.handleClickOpen}>
            <Icon color='primary'>
              add
            </Icon>
            </IconButton>
          </div>
        </Grid>
        <Divider />
        <div style={{ display: 'flex', alignItems: 'center', padding: 7.5 }}>
          <Icon color='disabled'>search</Icon>
          <TextField
              id="textarea"
              placeholder="Search Conversation"
              InputProps={{ disableUnderline: true }}
              style={{ marginLeft: 5 }}
          />
        </div>
            <Divider />
      </div>
    );
  }

  renderList() {
    const maplist = (user) => {
      const active = this.props.activeUser.name === user.name;
      const count = user.badge > 0;  
      const recentMessageRef = firebase.database().ref(`messages/${'+' + user.phone}`);
      recentMessageRef.on('value', data => {
        const recentMessage = data.val();
        user.recentMessage = recentMessage.recentMessage;
        console.log(recentMessage.recentMessage);
      });
      return (
        <div key={user.email}>
          <ListItem button disableGutters divider 
          onClick={() => this.props.selectUser(user)} style={active ? {backgroundColor:'rgb(237, 237, 237)'} : {}} >
            <Grid item>
              <Avatar alt={user.avatar} src={`https://api.adorable.io/avatars/255/${user.phone}@adorable.png`} style={{ width: 45, height: 45, margin: 5, marginRight: 20 }}/>
            </Grid>
            <Grid item xs >
              <Typography>{user.name}</Typography>
              <Typography variant='caption' style={styles.avatar} >{user.recentMessage}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" style={{ padding: 5, display: 'flex',flexDirection: 'row-reverse', marginRight: 5, justifyContent:'flex-start'}}>{user.time}</Typography>
              {count ? <Badge style={styles.margin} badgeContent={user.badge} color="secondary"></Badge> : false}  
            </Grid>
          </ListItem>
        </div>
      );
    }
    return this.props.usersDataBase.users.map(maplist)
  }

  render() {
    const recentMesRef = firebase.database().ref(`messages/`);
    recentMesRef.on('value', data => {
    this.renderList()
    });
    if (this.props.usersDataBase.loading === true) { 
      return <p> loading...</p>;
    }
    return (
      <div>
        <div style={{ height: 'calc(100vh - 185px)', overflowY: 'scroll' }}>
          {this.renderList()}   
        </div>     
        <div>
        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter contact name, phone # and email
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              onChange={name => this.handleInputName(name)}
            />
            <TextField
              variant="outlined"
              id="phone number"
              label="Phone #"
              type="text"
              onChange={phone => this.handleInputPhone(phone)}
              fullWidth
            />
            <TextField
              variant="outlined"
              id="email"
              label="Email"
              type="email"
              onChange={email => this.handleInputEmail(email)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleNewUser} color="primary">
              Add Contact
            </Button>
          </DialogActions>
        </Dialog>
        </div>        
      </div>
    );
  }
}
  
const styles = {
  root: {
    overflow: 'hidden',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    padding: 5,
    width: 150,
    
  },
  bigAvatar: {
    width: 50,
    height: 50,
    margin: 5,
  },
  paper: {
    padding: 0, 
    height: '100vh',
    overflow: 'hidden'
  },
  margin: {
    marginTop: 5,
    marginRight: 30,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
};


function mapStateToProps(state) {
  return {
    users: state.users,
    activeUser: state.activeUser,
    usersDataBase: state.usersDataBase
  };
} 

function mapDispachToProps (dispatch) {
  return bindActionCreators({ selectUser, updateUsers, addUser }, dispatch);
}


export default connect(mapStateToProps, mapDispachToProps)(UserList);
