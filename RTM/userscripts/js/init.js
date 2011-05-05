ABBRTM = window.ABBRTM || {};

ABBRTM.init = function() {
	ABBRTM.configuration = new ABBRTM.Configuration();
	ABBRTM.utility = new ABBRTM.Utility();
	ABBRTM.aBitBetterRTM = new ABBRTM.ABitBetterRTM();
	ABBRTM.location = new ABBRTM.Location();
}

function initializeABBRTM() {
    if (overviewList && overviewList.drawn) {
        ABBRTM.init();
    }
    else {
        setTimeout(initializeABBRTM, 500);
    }
}

initializeABBRTM();

