import React from 'react'

export class MemeGenerator extends React.Component {
	constructor(){
		super()
		this.state ={
			topText: '',
			bottomText: '',
			randomImage: 'http://i.imgflip.com/1bij.jpg',
			allMemeImgs: []
		}
		 this.handleChange = this.handleChange.bind(this);
		 this.handleSubmit= this.handleSubmit.bind(this);
	}

	componentDidMount(){
		const api = 'https://api.imgflip.com/get_memes';
		fetch(api)
		.then(res=> res.json())
		.then(res => {
			const {memes} = res.data;
			console.log(res.data.memes[1])
			this.setState({allMemeImgs: memes})
			});
	}

	handleChange(event){
		const {name, value} = event.target;
		this.setState({ [name]: value})
	}

	handleSubmit(event){
		event.preventDefault();
		const ranNum = Math.floor(Math.random()*(this.state.allMemeImgs.length-1))+0;
		const link = this.state.allMemeImgs[ranNum].url;
		console.log(link);
		this.setState({
			randomImage: link
		})
	}


	render() {
		return (
			<div>
				<form className='meme-form' onSubmit={this.handleSubmit}>
				<input 
					name='topText'
					type='text'
					placeholder="Top Text"
					value={this.state.topText}
					onChange={this.handleChange} />

				<input 
					name='bottomText'
					type='text'
					placeholder="Bottom Text"
					value={this.state.bottomText}
					onChange={this.handleChange}  />

				<button>Generate</button>
				</form>
				<hr />
				<div className="meme">
					<img src={this.state.randomImage} />
					<h2 className='top'>{this.state.topText}</h2>
					<h2 className='bottom'>{this.state.bottomText}</h2>
				</div>
			</div>
		)
	}
}

export default MemeGenerator