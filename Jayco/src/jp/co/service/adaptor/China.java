package jp.co.service.adaptor;

public class China{

	ChinaAdaptorInterface chinaAdaptorInterface;

	public void setAddaptor(ChinaAdaptorInterface chinaAdaptorInterface) {
		this.chinaAdaptorInterface = chinaAdaptorInterface;
	}

	China(){};

	public China(ChinaAdaptorInterface chinaAdaptorInterface) {
		this.chinaAdaptorInterface = chinaAdaptorInterface;
}

	public void charge() {
		chinaAdaptorInterface.charge3Pins();
	}
}
