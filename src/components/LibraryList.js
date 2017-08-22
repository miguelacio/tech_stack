import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class LibraryList extends Component {
    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }
    render() {
        console.log(this.props);
        return;
    }
}

const mapStateToProps = state => {
    return {libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);