import React from 'react';

const ProfileCard = ({ profile ,editUSer, delUser}) => {

    return (
        <section className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4"><i className="fa fa-user" aria-hidden="true"></i> {profile.username}</p>
                        <p className="subtitle is-6"><i className="fa fa-envelope" aria-hidden="true"></i> {profile.email}</p>
                        <p className="subtitle is-6"><i className="fa fa-calendar" aria-hidden="true"></i> Joined React-bnb {Math.floor((Date.now() - profile.joined) / 1000 / 60)} min ago</p>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item" onClick={editUSer}>Edit</a>
                    <a href="#" className="card-footer-item" onClick={delUser}>Delete</a>
                </footer>
            </div>
        </section>
    )
}

export default ProfileCard;
