package jp.co.service.adaptor;

public class Adaptor implements ChinaAdaptorInterface{

	EuroAdaptorInterface euroAdaptorInterface;

	public Adaptor(EuroAdaptorInterface euroAdaptorInterface) {
		// TODO 自動生成されたコンストラクター・スタブ
		this.euroAdaptorInterface = euroAdaptorInterface;
	}

	@Override
	public void charge3Pins() {
		// TODO 自動生成されたメソッド・スタブ
		euroAdaptorInterface.chargeIn2Pins();

	}

}
