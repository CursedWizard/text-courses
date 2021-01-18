import React from 'react';

class Disk extends React.Component {

	render()
	{
		return (
			<svg style={this.props.style} className={this.props.className} width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="68" height="68" rx="34" fill="#FF8D3C"/>
				<path d="M37.3125 54.9998H31.6875C30.375 54.9998 28.875 53.8748 28.875 51.6248V47.6873C28.875 45.8123 27.9375 44.1248 26.4375 42.8123C23.0625 40.1873 21.375 36.4373 21.375 32.3123C21.5625 25.1873 27.375 19.5623 34.3125 19.3748C37.875 19.3748 41.25 20.6873 43.6875 23.1248C46.125 25.5623 47.625 28.9373 47.625 32.4998C47.625 36.4373 45.9375 40.1873 42.75 42.6248C41.0625 43.9373 40.125 45.9998 40.125 47.8748V52.1873C40.125 53.6873 38.8125 54.9998 37.3125 54.9998ZM34.5 21.2498C28.5 21.2498 23.4375 26.3123 23.25 32.3123C23.25 35.8748 24.75 39.2498 27.5625 41.3123C29.625 42.9998 30.75 45.2498 30.75 47.6873V51.6248C30.75 51.9998 30.75 53.1248 31.6875 53.1248H37.3125C37.875 53.1248 38.25 52.7498 38.25 52.1873V47.8748C38.25 45.4373 39.5625 42.8123 41.625 41.1248C44.25 39.0623 45.75 35.8748 45.75 32.4998C45.75 29.4998 44.625 26.6873 42.375 24.4373C40.3125 22.3748 37.5 21.2498 34.5 21.2498Z" fill="white"/>
				<path d="M39.1875 49.3748H29.8125C29.25 49.3748 28.875 48.9998 28.875 48.4373C28.875 47.8748 29.25 47.4998 29.8125 47.4998H39.1875C39.75 47.4998 40.125 47.8748 40.125 48.4373C40.125 48.9998 39.75 49.3748 39.1875 49.3748Z" fill="white"/>
				<path d="M34.5 15.625C33.9375 15.625 33.5625 15.25 33.5625 14.6875V10.9375C33.5625 10.375 33.9375 10 34.5 10C35.0625 10 35.4375 10.375 35.4375 10.9375V14.6875C35.4375 15.25 35.0625 15.625 34.5 15.625Z" fill="white"/>
				<path d="M47.063 20.8752C46.8755 20.8752 46.5005 20.8752 46.313 20.6877C45.938 20.3127 45.938 19.7502 46.313 19.3752L48.938 16.7502C49.313 16.3752 49.8755 16.3752 50.2505 16.7502C50.6255 17.1252 50.6255 17.6877 50.2505 18.0627L47.6255 20.6877C47.6255 20.6877 47.2505 20.8752 47.063 20.8752Z" fill="white"/>
				<path d="M56.0625 33.4377H52.3125C51.75 33.4377 51.375 33.0627 51.375 32.5002C51.375 31.9377 51.75 31.5627 52.3125 31.5627H56.0625C56.625 31.5627 57 31.9377 57 32.5002C57 33.0627 56.625 33.4377 56.0625 33.4377Z" fill="white"/>
				<path d="M49.688 48.6252C49.5005 48.6252 49.1255 48.6252 48.938 48.4377L46.313 45.8127C45.938 45.4377 45.938 44.8752 46.313 44.5002C46.688 44.1252 47.2505 44.1252 47.6255 44.5002L50.2505 47.1252C50.6255 47.5002 50.6255 48.0627 50.2505 48.4377C50.2505 48.6252 50.063 48.6252 49.688 48.6252Z" fill="white"/>
				<path d="M19.3125 48.6252C19.125 48.6252 18.75 48.6252 18.5625 48.4377C18.1875 48.0627 18.1875 47.5002 18.5625 47.1252L21.1875 44.5002C21.5625 44.1252 22.125 44.1252 22.5 44.5002C22.875 44.8752 22.875 45.4377 22.5 45.8127L19.875 48.4377C19.6875 48.6252 19.5 48.6252 19.3125 48.6252Z" fill="white"/>
				<path d="M16.6875 33.4377H12.9375C12.375 33.4377 12 33.0627 12 32.5002C12 31.9377 12.375 31.5627 12.9375 31.5627H16.6875C17.25 31.5627 17.625 31.9377 17.625 32.5002C17.625 33.0627 17.25 33.4377 16.6875 33.4377Z" fill="white"/>
				<path d="M21.9375 20.875C21.75 20.875 21.375 20.875 21.1875 20.6875L18.5625 17.875C18.1875 17.5 18.1875 16.9375 18.5625 16.5625C18.9375 16.1875 19.5 16.1875 19.875 16.5625L22.5 19.1875C22.875 19.5625 22.875 20.125 22.5 20.5C22.3125 20.6875 22.125 20.875 21.9375 20.875Z" fill="white"/>
				<path d="M42 33.4375C41.4375 33.4375 41.0625 33.0625 41.0625 32.5C41.0625 28.9375 38.0625 25.9375 34.5 25.9375C33.9375 25.9375 33.5625 25.5625 33.5625 25C33.5625 24.4375 33.9375 24.0625 34.5 24.0625C39.1875 24.0625 42.9375 27.8125 42.9375 32.5C42.9375 33.0625 42.5625 33.4375 42 33.4375Z" fill="white"/>
			</svg>
		);
	}
}


export default Disk;
