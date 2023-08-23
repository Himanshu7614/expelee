const slugToName = (slug) => {
	switch (slug) {
		case 'fomo-lab':
			return 'Fomo Lab'
		case 'qroniswap':
			return 'Qroniswap'
		case 'bloc-vault':
			return 'Bloc Vault'
		default:
			return ''
	}
}

export default slugToName
