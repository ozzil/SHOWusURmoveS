package jp.co.service.adaptor;

public class TestClass {

	public static void main(String[] args) {
		// TODO 自動生成されたメソッド・スタブ
		EuroAdaptorInterface euroAdaptorInterface = new EuroAdaptor();

		China china = new China();

		Adaptor adaptor = new Adaptor(euroAdaptorInterface);
		china.setAddaptor(adaptor);
		china.charge();

	}

}
