const WIZARDS = [
  {
    name: 'Dorothy of Wizard of Oz',
    image:
      'https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY1MzU5MTMyNDgyNzQxNTI4/judy-garland-1922---1969-as-dorothy-gale-in-the-wizard-of-oz-1939-photo-by-silver-screen-collection_hulton-archive_getty-images.jpg',
  },
  {
    name: 'Harry Potter',
    image:
      'https://vignette.wikia.nocookie.net/harrypotter/images/8/8d/PromoHP7_Harry_Potter.jpg/revision/latest?cb=20140603201724',
  },
  {
    name: 'Doctor Strange',
    image:
      'https://fsb.zobj.net/crop.php?r=xgii1X95lVrzaD-DrswSe-1e32mfKc_mTDoKzAwIuckdZ_miltpO0gUW-Z1YdMHDoWyuRj2IUcfVVQ73_eJHPGAi4ubCd5ZBxIO2AAZqG906mpAwN7IQ9LaW02GFiDNzqYat97G2kt2Gs_PovlJfxtvUkS6eItMC0x3r14fOS2Xi2AcNFy2rrKbbK_k',
  },
];

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a brand text', async () => {
    await expect(element(by.id('brand'))).toBeVisible();
    await expect(element(by.text('WIZARD'))).toBeVisible();
  });

  it('should display all three wizards', async () => {
    await expect(element(by.id(`wizard-${WIZARDS[0].name}`))).toBeVisible();
    await expect(element(by.id(`wizard-${WIZARDS[1].name}`))).toBeVisible();
    await expect(element(by.id(`wizard-${WIZARDS[2].name}`))).toBeVisible();
  });

  it('should not display selected wizard text when none is selected', async () => {
    await expect(element(by.id('selected-wizard-text'))).toNotExist();
  });

  it('should display selected wizard text when a wizard is selected', async () => {
    await element(by.id(`wizard-${WIZARDS[0].name}`)).tap();
    await expect(element(by.id('selected-wizard-text'))).toBeVisible();
  });

  it('should select a wizard and display its specific wizard name', async () => {
    await element(by.id(`wizard-${WIZARDS[0].name}`)).tap();
    await expect(
      element(by.text(`Your wizard is ${WIZARDS[0].name}.`)),
    ).toBeVisible();

    await element(by.id(`wizard-${WIZARDS[1].name}`)).tap();
    await expect(
      element(by.text(`Your wizard is ${WIZARDS[1].name}.`)),
    ).toBeVisible();

    await element(by.id(`wizard-${WIZARDS[2].name}`)).tap();
    await expect(
      element(by.text(`Your wizard is ${WIZARDS[2].name}.`)),
    ).toBeVisible();
  });

  it('should not be able to tap choose wizard button when none is selected', async () => {
    try {
      await element(by.id('choose-wizard-button')).tap();
    } catch (e) {
      console.log('Button is disabled');
    }
  });

  it('should display an activity loader when choose wizard button is tapped', async () => {
    await element(by.id(`wizard-${WIZARDS[0].name}`)).tap();
    await element(by.id('choose-wizard-button')).tap();
    await expect(element(by.id('loading'))).toBeVisible();
  });
});
