import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Modal, Popover, OverlayTrigger, Button} from "react-bootstrap";
import {Comment, Tooltip} from 'antd';
import moment from "moment";
import store from '../../store';

const OttPage = styled.div`
  min-height: 900px;
  display: grid;
`

const TitleDiv = styled.h2`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`

const ContentTitle = styled(TitleDiv)`
  font-size : 36px;
  border-bottom: 1px solid gray;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom: 5px;
  overflow: visible;
`

const OttDiv = styled.div`
  width : 1150px;
  height : 600px;
  display: grid;
  grid-template-columns: 2fr 4fr 1fr; 
  margin: auto;
  margin-top: 20px;
`

const MembersDiv = styled.div`
  font-family : "Jua";
  display: block;

  border-style: solid;
  border-color : #6b66ff;
  border-width: 3px;
  border-bottom-width : 3px;
  border-radius : 14px 14px;
  border-bottom-color: #595959;
  background: white;

`

const MemberDiv = styled.div`
  background : white;
  font-size: 28px;
  text-align: left;

  width: 80%;
  height: 20%;

  display: grid;
  grid-templates-rows: 1fr 1fr;

  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;

  padding-bottom: 10px;
  padding-top: 15px;
  padding-left: 20px;
  padding-right: 20px;

  border-style: solid;
  border-width : 1px 1px 3px 1px;
  border-radius : 7px;
  border-color: #595959;
`

const MemberUpperDiv = styled.div`

`

const MemberLowerDiv = styled.div`
  font-size: 20px;
  font-weight: 100;
  text-align: right;
`

const Icon = styled.img`
  height: 24px;
  position: relative;
  bottom: 3px;
  margin-left: 5px;
`

const ClassIcon = styled.img`
  margin-right : 10px;
  position: relative;
  bottom: 4px;
`

const ContentDiv = styled.div`
  white-space: pre-line;
  font-family: "Jua";
  border-style: solid;
  border-width : 3px 1px 2px 1px;
  border-radius : 14px 14px;
  border-color: #595959;
  margin-right: 10px;
  margin-left: 10px;
`

const ContentLine1 = styled.div`
  font-size: 20px;
  display: grid;
  grid-template-columns : 1fr 1fr;
`;

const ContentElement1 = styled.div`
  margin-top: 5px;
  margin-left: 13px;
  margin-right: 13px;

  border-width: 0 0 1px 0;
  border-style : solid;
  border-color : gray;
  border-radius: 8px;
`

const ContentLine2 = styled.div`
  margin-top: 10px;
  font-size: 25px;
`;

const ContentElement2 = styled.div`
  font-size: 14px;
  font-family: ????????????;
  
  min-height: 60px;

  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  margin: auto;
  margin-left: 13px;
  margin-right: 13px;

  border-width: 0 0 1px 0;
  border-style : solid;
  border-color : gray;
  border-radius: 8px;

  text-align: center;  
`


const ContentLine3 = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns : 1fr 1fr;
`;

const ContentElement3 = styled(ContentElement1)`
  border-width: 0 0 1px 0;
  border-style : solid;
  border-color : gray;
  border-radius: 8px;
  font-size: 16px;
  text-align: left;
  padding-left : 25px;
  padding-bottom: 10px;
`

const ContentTitle3 = styled.div`
  text-align: center;
  font-size: 25px;
  position: relative;
  right: 20px;
`

const ContentLine4 = styled.div`
  margin-top: 20px;
  font-size: 25px;
`;

const ContentElement4 = styled.div`
  font-size: 18px;
  text-align: left;
  padding-left: 235px;
`

const ContentElement4_2 = styled.div`
  font-size: 18px;
`

const MenuDiv = styled(MembersDiv)`
  display: grid;
`

const MenuButton = styled(Link)`
  background: white;
  font-size: 17px;
  width: 120px;
  color: black;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  margin: auto;

  position: relative;
  bottom: 60px;

  border-style: solid;
  border-width : 1px 1px 3px 1px;
  border-radius : 7px;
  border-color: #595959;
`

const InputContainer = styled.div`
  padding-left: 26px;
  padding-right: 30px;
`
const Input = styled.input`
  padding: 0px 10px;
  font-size: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 3px;
  transition: border 0.1s ease-in-out;
  outline: none;
  &:hover,
  &:focus {
    border: 2px solid #6799ff;
  }
`;

const InputLabel = styled.label`
  font-size:20px;
  display: block;
`

const NoticeInput = styled.textarea`
  padding: 10px 10px;
  font-size: 15px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 3px;
  transition: border 0.1s ease-in-out;
  outline: none;
  &:hover,
  &:focus {
    border: 2px solid #6799ff;
  }
  height : 100px;
  width: 100%;
  text-overflow: auto;
`

const InputDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top : 10px;
`

const HalfInput = styled(Input)`
  width: 95%;
`

const UnitInput = styled(Input)`
  width: 40%;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none; 
  }
  text-align: right;
`

const InputTitle = styled.div`
  font-size: 24px;
  margin-top: 14px;
  font-weight: 600;
  margin-bottom: 14px;
`

const UnitLabel = styled.label`
  font-size:20px;
  padding-left : 10px;
`

const UnitDiv = styled.div`
  text-align: right;
  padding-right: 10px;
`

const SelectButton = styled.button`
  background-color: #7D79FF;
  color : white;
  cursor: pointer;
  font-size: 18px;
  transition: .2s all;
  font-weight: 100;
  font-family: 'Jua', sans-serif;
  border-radius: 5px;
  border-color: white;
  &:hover {
      background: white;
      color: #6b66ff;
  }
`
const RemittanceDiv = styled.div`
  item-align: center;
  padding: auto;
`

const Remittance = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 100;
  font-family: 'Jua', sans-serif; 
`

const CommentDeleteButton = styled.button`
  color: white;
  background-color: #6B66FF;
  border-color: #6B66FF;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 0 2px rgba(133, 133, 133, 0.5);
  }
`

const CommentContent = styled.div`
  font-size: 15px;
  text-align: left;
`
const CommentDiv = styled.div`
  width : 600px;
  display: grid;
  margin: auto;
  margin-bottom: 4px;
`

const Comment2 = styled(Comment)`
  border-bottom: 1px solid black;
`

const NonCommentDiv = styled(CommentDiv)`
  border: none;
  ;
`

const CommentButton = styled.button`
  font-weight: 600;
  color: white;
  border: 1px solid #6799FF;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  margin-left:5px;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  font-size:18px;
  transition: .2s all;
  background:#6B66FF;

  &:hover {
      background-color: white;
      color: #6799FF;
  }
`;

const CommentForm = styled.form`
  width: 600px;
  margin: auto;
  margin-bottom: 30px;
`

const ExitButton = styled(Button)`
  background: white;
  font-size: 17px;
  width: 120px;
  color: black;

  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;

  margin: auto;

  position: relative;
  bottom: 60px;

  border-style: solid;
  border-width : 1px 1px 3px 1px;
  border-radius : 7px;
  border-color: #595959;

  &:hover {
    color: #3FA6FB;
    background: white;
  }

  &:focus {
    color: black;
    background: white;
    box-shadow: none;
  }
`

const ExitPopover = styled(Popover)`
  text-align: center;
`

const OttRoomPresenter = ( {groupDetail, exitRoom, translationPlatform, remittances, detailTitleChange, noticeChange, accountChange, ott_idChange, ott_pwdChange, termChange, start_dateChange, newMoneyChange, commentsChange, patchDetail, checkMemberRemittance, sendRemittanceDone, setMemberRemittance, writeOnClick, deleteOnClick, getRoomDetail} ) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleConfirm = () => {
    patchDetail();
  }
  const handleShow = () => {
    setShow(true);
  }

  const [remittanceModalShow, setRemittanceModalShow] = useState(false);
  const remittanceClose = () => {
    setRemittanceModalShow(false);
  }

  const remittanceShow = () => {
    setRemittanceModalShow(true);
    checkMemberRemittance();
  }

  const popover = (
    <ExitPopover id="popover-basic">
      <ExitPopover.Body>
        ????????? ????????? ????????? ???, ?????? ???????????? ????????? ???????????? ?????????.<br/>
        <br/>
        <b>???????????? ????????? ??????, ?????? ????????? ????????? ???????????????.</b><br/>
        <br/>
        <Button onClick={exitRoom}>?????? ??????</Button>
      </ExitPopover.Body>
    </ExitPopover>
    );

  return (
    <OttPage>
      {(groupDetail && groupDetail.members.length > 0) ? 
      <OttDiv>
        <MembersDiv>
          <TitleDiv>?????? ?????? ({groupDetail.members.length} / {groupDetail.max_member_num})</TitleDiv>
          {groupDetail.members.map((member) => (
            <MemberDiv key={member.user_id}>
              <MemberUpperDiv>
                {member.nickname} 
                {(member.authority === "ADMIN") ? <Tooltip title="?????????"><Icon src="./crown.png" alt="admin"/></Tooltip> : <></>}
                {(member.user_id === store.getState().user.id) ? <Tooltip title="??????"><Icon src="./avatar.png" alt="avatar"/></Tooltip> : <></>}
              </MemberUpperDiv>
              <MemberLowerDiv>
                
                {(member.authority === "ADMIN") ? <div> ????????? </div> : <div>
                  {(member.remittance === 1) ?  "?????? ?????????" : <></>} </div>}
              </MemberLowerDiv>
            </MemberDiv>
          ))}
        </MembersDiv>

        <ContentDiv>
          <ContentTitle>{groupDetail.title}</ContentTitle>
          <div>
            <ContentLine1>
              <ContentElement1>
                <ClassIcon height="30px" src={`./${groupDetail.classification}.png`}/>{translationPlatform(groupDetail.classification)}
              </ContentElement1>
              <ContentElement1>{moment(groupDetail.created).format('YYYY??? MM??? DD???')} ??????</ContentElement1>
            </ContentLine1>
            
            <ContentLine2>
              ????????????
              <ContentElement2>
                {groupDetail.notice ? <>{groupDetail.notice}</> : <>??????????????? ????????????.</>}
              </ContentElement2>
            </ContentLine2>
            
            <ContentLine3>
              <ContentElement3>
                <ContentTitle3>?????? ??????</ContentTitle3>
                {groupDetail.start_date ? <>
                  ?????? ?????? ????????? : {moment(groupDetail.start_date).format('YYYY??? MM??? DD???')} <br/>
                  {groupDetail.term ? <>
                    ?????? : {groupDetail.term}??? <br/>
                    ?????? ?????? ????????? : {moment(groupDetail.end_date).format('YYYY??? MM??? DD???')} <br/>
                    </> : <>
                      ????????? ?????? ?????? ????????? ????????????.
                    </>}
                </> : <>
                  ?????? ????????? ????????????.
                </>}
                
              </ContentElement3>
              <ContentElement3>
                <ContentTitle3>?????? ??????</ContentTitle3>
                {groupDetail.account ? <>
                  ?????? ?????? : {groupDetail.account} <br/>
                  ??? ?????? ?????? : {groupDetail.total_money}??? <br/>
                  ????????? ?????? ?????? : {groupDetail.div_money}??? <br/>
                </> : <>
                  ?????? ????????? ????????????.
                </>}
              </ContentElement3>
            </ContentLine3>
          
            <ContentLine4>
            <h3>?????? ?????????</h3>
              {Object.keys(groupDetail).includes('ott_id') ? <ContentElement4>
                {groupDetail.ott_id ? <>
                  ?????? ID : {groupDetail.ott_id} <br/>
                  ?????? PW : {groupDetail.ott_pwd}
                </> : <>
                  ?????? ????????? ????????????.
                </>}
              </ContentElement4> : <ContentElement4_2>
                ?????? ????????? ???????????? ????????????. ???????????? ?????? ????????? ???????????????.
              </ContentElement4_2>}
            </ContentLine4>
            
          </div>
        </ContentDiv>
        <MenuDiv>
          <TitleDiv>??????</TitleDiv>
          {(store.getState().user.id === groupDetail.ADMIN[0].user_id) ? <>
          <MenuButton onClick={handleShow}>????????????</MenuButton>
          <MenuButton onClick={remittanceShow}>?????? ??????<br/>??????</MenuButton>
          </> : <>
          <MenuButton onClick={sendRemittanceDone}>?????? ??????<br/>??????</MenuButton>
          <MenuButton onClick={getRoomDetail}>?????? ??????</MenuButton>
          </>}
            
          <MenuButton to="/Ott">????????????<br/>????????????</MenuButton>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <ExitButton variant="success">?????? ??????</ExitButton>
          </OverlayTrigger>
        </MenuDiv>
    </OttDiv> : <div> No GroupDetail available.</div>}

            

    <CommentDiv>
      {groupDetail && groupDetail.comments.length > 0 ? (
        <>
          {groupDetail.comments.map((comment) => ( 
            <Comment2 
              key={comment.id}
              actions={[
                <div>
                  {store.getState().user.id === comment.commenter ? (
                      <CommentDeleteButton type="button" id={comment.id} onClick={deleteOnClick} >?????? ??????</CommentDeleteButton>
                      ) : (<p></p>)
                  }
                </div>
              ]}
              content={
                <CommentContent>
                  <div>        
                    <b>{comment.nickname}</b> &nbsp;{moment(comment.created).format("YYYY-MM-DD hh:mm")} ??????<br/>
                  </div>
                  <div> 
                    {comment.contents}
                  </div>
                </CommentContent>
              }>
            </Comment2>
          ))}
        </>):(
          <NonCommentDiv>????????? ????????????.</NonCommentDiv>
        )}
      </CommentDiv>
      
      {store.getState().user ? (
        <CommentForm style={{ display: 'flex' }}>
          <textarea style={{ width: '80%', borderRadius: '2px' }}
            onChange={commentsChange} placeholder="????????? ??????????????????">
          </textarea>
          <CommentButton style={{ width: '20%', height: '52px' }} onClick={writeOnClick}>??????</CommentButton>
        </CommentForm>
        ):(<CommentForm>????????? ??????????????? ??????????????????.</CommentForm>)} 






      <Modal show={show} onHide={handleClose}>
        <Modal.Body> 
          {groupDetail ? (
            <InputContainer>
              <InputTitle>?????? ?????? ??????</InputTitle>
              <InputLabel>?????? ??????</InputLabel>
              <Input required={true} type="text" defaultValue={groupDetail.title} onChange={detailTitleChange} minLength={2}/>
              <InputLabel>????????????</InputLabel>
              <NoticeInput placeholder="????????? ??????????????? ????????? ????????? ??????????????????." defaultValue={groupDetail.notice} onChange={noticeChange}/>
              <hr/>
              <InputTitle>?????? ??? ?????? ??????</InputTitle>
              <InputDiv>
                <div>
                  <InputLabel>?????? ??????</InputLabel>
                  <HalfInput required={true} type="text" placeholder="?????? ????????? ???????????????." defaultValue={groupDetail.account} onChange={accountChange}/>
                </div>
                <UnitDiv>
                  <InputLabel>??? ?????? ??????</InputLabel>
                  <UnitInput required={true} type="number" pattern="[0-9]*" defaultValue={groupDetail.total_money} onChange={newMoneyChange}/> <UnitLabel>???</UnitLabel>
                </UnitDiv>
              </InputDiv>
              <hr/>
              
              <InputTitle>?????? ??????</InputTitle>
              <InputDiv>
                <div>
                  <InputLabel>?????? ????????? ?????????</InputLabel>
                  <HalfInput required={true} type="date" defaultValue={moment(groupDetail.start_date).format('YYYY-MM-DD')} onChange={start_dateChange}/>
                </div>
                <div>
                <InputLabel>?????? ????????? ?????? ??????</InputLabel>
                  <UnitDiv>
                    <UnitInput required={true} type="number" pattern="[0-9]*" defaultValue={groupDetail.term} onChange={termChange}/> <UnitLabel>???</UnitLabel>
                  </UnitDiv>
                </div>
              </InputDiv>
              <hr/>
              <InputTitle>?????? ?????? ??????</InputTitle>
              <InputDiv>
                <div>
                  <InputLabel>?????? ID</InputLabel>
                  <HalfInput type="text" defaultValue={groupDetail.ott_id} onChange={ott_idChange}/>
                </div>
                <div>
                  <InputLabel>?????? ????????????</InputLabel>
                  <HalfInput type="text" defaultValue={groupDetail.ott_pwd} onChange={ott_pwdChange}/>
                </div>
              </InputDiv>
            </InputContainer>
          ) : (<></>)}
          
        </Modal.Body>
        <Modal.Footer>
          <SelectButton variant="secondary" onClick={handleClose}>
            ??????
          </SelectButton>
          <SelectButton variant="primary" onClick={handleConfirm}>
            ??????
          </SelectButton>
        </Modal.Footer>
      </Modal>

      <Modal show={remittanceModalShow} onHide={remittanceClose}>
        <Modal.Header closeButton>
          <InputTitle>?????? ?????? ??????</InputTitle>
        </Modal.Header>
        <Modal.Body>
          <RemittanceDiv>
            {remittances && remittances.length ? (remittances.map((remittance) => ( 
            <Remittance key={remittance.remittanceCheck_id}>
              {remittance.nickname} ?????? ?????? ????????? ?????????????????????!&nbsp;&nbsp;
              <SelectButton onClick={setMemberRemittance} value={remittance.user_id} name={remittance.remittanceCheck_id}>??????</SelectButton>
            </Remittance>) 
            )): <Remittance>?????? ?????? ????????? ????????????.</Remittance>}
          </RemittanceDiv>
        </Modal.Body>
      </Modal>

      

    </OttPage>
  )
}

export default OttRoomPresenter;