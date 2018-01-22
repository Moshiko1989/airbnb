import { computed, observable, action, useStrict } from 'mobx';

import FlatService from '../services/FlatService'

useStrict(true)

class FlatObservableStore {
	@observable flats = [];

	@computed get flatsGetter() {
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


const FlastStore = new FlatObservableStore;
export default FlastStore