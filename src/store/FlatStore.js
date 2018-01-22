import { computed, observable, action, useStrict } from 'mobx';

import FlatService from '../services/FlatService'

useStrict(true)

class FlatObservableStore {
	@observable flats = [];
	@observable currFlat = null;

	@computed get flatsGetter() {
		return this.flats
	}

	@computed get flatGetter() {
		return this.currFlat;
	}

	@action setFlats = (flats) => {
		this.flats = flats
	}

	@action _setCurrFlat = (flat) => {
		this.currFlat = flat;
	}

	loadFlats() {
		FlatService.getFlats()
			.then(this.setFlats)
	}

	loadFlatById(id) {
		FlatService.getFlatById(id)
			.then(this._setCurrFlat)
	}
}


const FlastStore = new FlatObservableStore();
export default FlastStore