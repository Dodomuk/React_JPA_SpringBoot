import { Update } from '@material-ui/icons';
import { action, computed, makeObservable, observable, toJS } from 'mobx';
import moment from 'moment';
import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export interface TravelClub {
	name: string;
	intro: string;
	date: string;
}
export class ClubStore implements TravelClub {
	@observable
	name = '';
	@observable
	intro = '';
	@observable
	date = moment().format('YYYY-MM-DD');
	@observable
	private _searchText = '';
	@observable
	travelClub: TravelClub = {
		name: '',
		intro: '',
		date: this.date,
	};
	@observable
	clubs: Map<string, TravelClub> = new Map<string, TravelClub>();
	@observable
	clubList: Array<TravelClub>;
	@observable
	pageNum: number = 1;
	@observable
	size: number = 10;
	@observable
	buttonNum : number = 0;

	constructor() {
		makeObservable(this);
		this.clubList = new Array<TravelClub>();
	}

	clubLists() {
		return toJS(this.clubList);
	}

	@computed
	get getName() {
		return this.name;
	}

	@action
	setName(name: string) {
		this.name = name;
	}

	@computed
	get getIntro() {
		return this.intro;
	}

	@action
	setIntro(intro: string) {
		this.intro = intro;
	}

	@computed
	get getFoundedDate() {
		return this.date;
	}

	@computed
	get searchText() {
		return this._searchText;
	}

	setSearchText(text: string) {
		this._searchText = text;
	}

	getTravelClub(name: string) {
		return toJS(this.clubs.get(name));
	}

	@action
	setPageNum(num: number) {
		this.pageNum = num;
		this.clubList = [];
		this.findAll();
	}

	// CRUD 관련 메소드듣

	@action
	async findAll() {
		await axios
			.post(baseUrl + '/list', null, { params: { page: this.pageNum , size: this.size } })
			.then((response) => {this.clubList.push(...response.data.content); this.buttonNum = Math.floor(response.data.totalElements/this.size)+1})
			.catch(function (error) {
				console.log(error);
			});
	}

	@action
	async register(name: string, intro: string) {
		await axios
			.post(baseUrl + '/register', { name: name, intro: intro, date: this.date })
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		this.travelClub = {
			name: name,
			intro: intro,
			date: this.date,
		};
		if (this.clubs.has(name)) {
			window.alert('해당 이름의 클럽이 존재합니다');
		} else {
			this.clubs.set(name, this.travelClub);
		}
	}

	@action
	async update(name: string, intro: string) {
		await axios
			.post(baseUrl + '/update', { name: name, intro: intro, date: this.date })
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		this.travelClub = {
			name: name,
			intro: intro,
			date: this.date,
		};
		this.clubs.set(name, this.travelClub);
	}

	@action
	async delete(travelClub: TravelClub) {
		await axios
			.post(baseUrl + '/delete', { name: travelClub.name })
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

		this.clubs.delete(travelClub.name);
	}
}
