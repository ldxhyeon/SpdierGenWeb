
LoginModal = class LoginModal extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone()

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

    onLoginCloseClick(comp, info, e)
	{

		this.getContainer().close();

        document.body.style.overflow = 'auto';

	}


	onLoginBtnClick(comp, info, e)
	{

        let userId = this.loginId.getText();
        let userPw = this.loginPw.getText();

        if(userId == "") {
            AToast.show('아이디를 입력해주세요.');
        }else if(userPw == "") {
            AToast.show('비밀번호를 입력해주세요.');
        }


        if(userId != "" && userPw != "") {
            AToast.show("UserId : " + userId + '\n UserPW : ' + userPw);
            this.getContainer().close();
        }
	}
}

