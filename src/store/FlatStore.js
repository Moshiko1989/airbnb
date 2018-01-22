import { computed, observable, action, extendObservable, useStrict, autorun } from 'mobx';

import FlatService from '../services/FlatService'

useStrict(true)

class FlatStore {
	@observable flats = [];

	@computed get flats() {
		return this.flats
	}

	@action setFlats = (flats) => {
		this.flats = flats
	}

	loadFlats() {
		FlatService.getFlats()
			.then(this.setFlats)
	}
}


const FlatStore = new FlatStore();
export default FlatStore