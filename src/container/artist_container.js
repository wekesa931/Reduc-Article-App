import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { artistDetail,clearartistDetail } from '../actions';
import { bindActionCreators } from 'redux';

class ArtistContainer extends Component {

    componentWillMount() {
        this.props.artistDetail(this.props.match.params.id)


    }
    componentWillUnmount(){
        this.props.clearartistDetail()
    }

    artistTemplate = (data) => (
        data ?
            <div className="artist_view">
                <div className="artist_background" style={{
                    background: `url(/images/${data[0].cover})`
                }}>
                    <Link to="/">
                        Back home
                    </Link>
                    <div className="name">{data[0].name}</div>
                </div>
                <div className="artist_description">
                    <p>{data[0].bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {data[0].style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    {data[0].albums ?
                        data[0].albums.map(item => (
                            <div key={item.cover} className="albums">
                                <div className="cover" style={{
                                    background: `url(/images/albums/${item.cover})`
                                }}>
                                </div>

                            </div>
                        ))
                        : null
                    }
                </div>
            </div>
            : null
    )

    render() {
        return (
            <div>
                {this.artistTemplate(this.props.artists.artistData)}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        artists: state.artists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        artistDetail,clearartistDetail
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);