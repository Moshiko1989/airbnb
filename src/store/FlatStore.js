import { computed, observable, action, extendObservable, useStrict, autorun } from 'mobx';

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


const FlatStore = new FlatObservableStore();
export default FlatStore