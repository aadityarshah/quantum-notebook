# Introduction to Old Quantum Theory
## Failures of Classical Theory

### 1. Blackbody Radiation

A blackbody is an ideal object that absorbs all electromagnetic radiation falling on it and emits radiation on heating.  A blackbody emits thermal electromagnetic radiation whose spectrum depends only on its temperature

Experimentally, the spectrum looks like this  

<img src="../assets/blackbody-radiation-graph.jpg" width="390">  

#### Rayleigh-Jeans Law

The findings can be summarized by 
1. **Wien's Displacement Law** 
	$\lambda_{max} T = 2.898 \times 10^{-3} m.K = b$
	where $\lambda_{max}$ is the wavelength at which blackbody radiates at maximum intensity when spectrum is plotted per unit wavelength, $T$ is the temperature, and $b$ is Wien's displacement constant
2. **Stefan's Law** 
	Total power of blackbody radiation emitted across entire spectrum of wavelengths at a given temperature. The expression is given by
	$$P(T)=\sigma AT^4$$
	where $A$ is the surface area of a blackbody, $T$ is its temperature (in $K$), and $\sigma$ is the **Stefan-Boltzmann constant**, $\sigma = 5.670 \times 10^{-8} W/(m^2 \dot K^4)$. 

The result of classical model for blackbody radiation is known as **Rayleigh-Jeans law**.  But it fails to correctly reproduce experimental results for shorter wavelengths though it works for larger, called *UV catastrophe.*

From Rayleigh--Jean's distribution assuming energy can take any value in $(0, \infty )$. The average value associated with an electromagnetic mode of frequency $\nu$ inside blackbody cavity in thermal equilibrium at temperature $T$ is found by summing product of energy and weights in numerator divided by weights in denominator. Since classical believes it is continuous, we integrate to find it and it is determined to be independent of $\nu$ and obtain $\bar{E} = k_B T = 1/\beta$ 

#### Planck's Law of Blackbody Radiation

Planck introduced idea of discrete energy levels called quanta in Planck's oscillator and that the energy of the oscillator in its $n$-th energy state, it has energy $E=nh\nu$, thus the smallest energy possible to exchange being $\Delta E = h\nu$, 
where $h=6.626 \times 10^{-34} J\cdot s = 4.136 \times 10^{-15} eV \cdot s$, $f$ is the frequency of Planck's oscillator.
Using this, average energy was found to be 
$$\bar{E} = \frac{h\nu}{\exp(h\nu/k_BT)-1}$$
which is dependent on frequency $\nu$.  At lower frequencies ($\lambda \to \infty$), we get $\bar{E} \approx k_B T = 1/\beta$   
Classical observations work at very larger wavelengths because $\nu$ is smaller and energy gap between consecutive discrete levels becomes tinier ($h\nu \ll k_B T$) but quantum model remains consistent throughout. 

He derived the energy-density formula
$$\rho(\lambda, T) = \frac{8\pi hc}{\lambda^5}\frac{1}{e^{hc/(\lambda k_B T)}-1}$$
where $c$ is the speed of light, $k_B$ is Boltzmann's constant, $k_B = 1.381 \times 10^{-23} J/K$. 
The spectral radiance coming out of blackbody in a particular direction (but same in every direction) is given by
$$I(\lambda, T) = \frac{2hc^2}{\lambda^5}\frac{1}{e^{hc/(\lambda k_B T)}-1}$$
where $I$ represents spectral radiance. 
$$\lim_{\lambda \to \infty} \rho(\lambda, T) = \frac{8\pi kT}{\lambda^4}$$ which represents the Rayleigh-Jeans spectral distribution law. 
Also, we can use this to show
$$\lambda_{max} T = \frac{hc}{4.965k_B} = b$$
### 2. Photoelectric Effect

#### Hertz Experiment

Hertz experiment discovered the photoelectric effect showing that visible light could be used to eject electrons from a metal surface. 
Lenard performed subsequent experiments and the observations established by Lenard were as follows:-
1. Electrons are emitted from a specific metal only if the incident light has a frequency greater than or equal to a minimum frequency called threshold frequency $\nu_t$ . 
2. The maximum kinetic energy $K_{max}$ of ejected electrons is independent of the intensity of the radiation. But, the photoelectric current depends upon intensity demonstrating that number of emitted electrons increases with intensity of the radiation at a fixed frequency.
3. The maximum kinetic energy $K_{max}$ of ejected electrons increases with frequency $\nu$ of the light.
4. The emission of electrons is nearly instantaneous 

#### Classical Electromagnetic Wave Theory

From classical electromagnetism, we know $E_0 \propto \sqrt{I}$ where $I$ is intensity of the light and $E_0$ is the amplitude of the electric field. Thus, electron shall experience a force $f = -eE$ and stronger the intensity of light, more energy electron will gain and thus sufficiently strong or sufficiently long illumination shall provide enough energy for electron to escape.  
Also, classical theory expects a time delay since at sufficiently low intensity, electron will theoretically accumulate energy to eventually escape.
But this is inconsistent with the observations except for that it could predict that photoelectric current shall increase with intensity. 

#### Einstein's Photon Theory

Einstein extended Planck's hypothesis of discrete energy quanta to electromagnetic radiation itself. While Planck had quantized the energy of his material oscillators as $E_n​=nh\nu$, Einstein proposed that light consists of quanta, each with energy $E​_\gamma=h\nu$. 

Einstein proposed that quanta (now called photon) of frequency ν is absorbed by an electron, and if its energy is greater or equal to the work function ϕ of the surface, the excess energy appears as the electron's kinetic energy:
$$K_{max} = h\nu - \phi$$
where $\phi$ is the work function such that $\phi = h\nu_t$ where $\nu_t$ is the threshold frequency.

### 3. Bohr's Model and Bohr-Sommerfeld Model of Atom

#### Failure of earlier models of atoms 

The Rutherford nuclear model described electrons moving around the nucleus, but the problem faced was that any accelerating electron would emit electromagnetic radiation and thus lose energy resulting in them spiraling around the nucleus and eventually collapse into it very quickly. 
Also, the atomic spectra of Hydrogen produced specific discrete lines.

#### Bohr's semi-classical model of hydrogen atom

These resulted in Bohr giving the ***postulate*** *Electrons in stationary orbits do not emit electromagnetic radiation* (though the reason behind the same was not provided). This accounted for the stability of atom and explained atomic spectra. 

According to Bohr's model, electrons move in **circular orbits**, such that $$L = mvr = \frac{nh}{2\pi}$$
where $m$ is electron mass, $v$ is velocity of electron, $r$ is orbital radius, $n$ is principal quantum number (the stationary orbits) starting from $n = 1$.  Also, while electron is in one of the stationary orbits, it emits no radiation (according to postulate) i.e. $$\frac{dE}{dt} = 0$$Thus, while the electron remains in a stationary orbit, its energy does not continuously decrease. Combining the angular-momentum quantization condition with the classical Coulomb force and energy expressions gives the allowed energy levels $$E_n = -\frac{13.6}{n^2} eV$$

He added that atom emits a photon when an electron moves from a higher energy state to lower energy state such that $\Delta E = hf$ where $f$ is frequency of photon. If it absorbs a photon, electron excites from lower energy state to higher energy state. 

Further derivations by Bohr used classical mechanics like Coulomb force to determine the orbit and thus this model is seen as a semi-classical model.
##### Failure of Bohr Model

This model worked for hydrogen atom and hydrogen-like ions (one electron) called hydrogenic species but failed for a general atom.
High-resolution spectroscopy revealed that some spectral lines consisted of closely spaced components, known as *fine structure*. Bohr's model could not account for this splitting because the energy depended only on the principal quantum number n.

#### Bohr-Sommerfeld model of atom

 Sommerfeld extended Bohr's model by allowing elliptical as well as circular stationary orbits. To quantize the different degrees of freedom of these orbits, he introduced additional quantum numbers that is now we had introduced the radial quantum number $n_r$ and azimuthal/angular quantum number $n_\phi$ and that principal quantum number $n = n_r  + n_\phi$ in Sommerfeld's old quantum theory notation

Sommerfeld proposed that for a periodic motion
$$\oint pdq = n_i h$$
where $n_i$ is an integer, $q$ is coordinate describing position and $p$ is momentum corresponding to the coordinate.  This is called the *quantization of action*. For circular orbits, this gives $L = n\hbar$ where $\hbar= h/2\pi$. 
This was introduced since in elliptical orbit, radial motion describes electrons movement towards and away from nucleus whereas angular describes around nucleus thus giving rise to two quantum numbers. 
For radial action,
$$\oint p_r dr = n_r h$$
and for angular action, $$\oint p_\phi d\phi = n_\phi h \implies L = n_\phi \hbar$$
Sommerfeld said each periodic motion has a quantized action.

He also added relativistic correction based on the fact that in an elliptical orbit, if $r \downarrow$, then $v \uparrow$ and thus electron can move fast enough to that special relativity produces a small correction to its energy which explained a major part of the *fine structure*. 

### 4. Double Slit Experiment

Young's double experiment was the time when the concept that light is a wave was accepted. The conditions for the experiment are as follows:-
1. Very closely spaced slits 
2. Coherent sources i.e. same frequency and constant phase difference
3. A monochromatic source to clarify the effect

If $E_1$ and $E_2$ are oscillating electric-fields, such that 
$$E_1 = A_1 \cos(\omega t)$$
$$E_2 = A_2 \cos(\omega t + \phi)$$ where $A_1$ and $A_2$ are amplitudes of electric fields, $\omega$ is the angular frequency and $\phi$ is the constant phase difference between the two.

Due to path difference at a point P on screen resulting in phase difference, if the waves arrive in phase at the point, constructive interference occurs ($\Delta \phi = 2m\pi$) and if in opposite phase ($\Delta \phi = (2m+1)\pi$, destructive interference occurs. 
The total phase difference  is given by $$\Delta \phi = \phi + \frac{2\pi}{\lambda}(r_2-r_1)$$where $r_1$ and $r_2$ are path lengths.

### 5. Stern-Gerlach Experiment

Stern and Gerlach designed an experiment. A silver foil in an oven to vaporize its atoms. The silver atoms were collected into a beam and passed through an in-homogeneous magnetic field. The silver atom beam was observed to split into two distinct beams.

Classically, the force resulting from a magnetic moment in a magnetic field, given by $$ \mathbf{F} \sim \nabla(\boldsymbol{\mu}\cdot\mathbf{B})$$ could make different atoms experience different forces due to arbitrary orientations of their magnetic moments, leading to a continuous distribution on the detector.

This was found to be inconsistent with the experiment. Thus, the conclusion that followed was that the component of the magnetic moment along the measurement axis can take discrete values. The term *spin* is used to refer to the *intrinsic angular momentum* rather than the actual classical meaning of spin. 
### 6. Compton Effect

<img src="../assets/compton-effect.webp" width="390">  

Suppose monochromatic X-rays with wavelength $\lambda$ are incident on a sample of graphite. They later emerge as scattered X-rays with wavelength $\lambda'$. A detector is used to measure the intensity of radiation scattered in any direction $\theta$ with respect to the direction of the incident X-ray beam. For a given scattering angle $\theta$, we measure the intensity and the wavelength $\lambda'$ of scattered beam.  For all scattering angles except for $\theta = 0^\circ$, two intensity peaks are measured, one at $\lambda$ which is the incident wavelength and other at $\lambda'$. The peaks are separated by $\Delta \lambda$ which depends on $\theta$ of the outgoing beam. The shifted peak is due to electrons that can recoil whereas unshifted peak at $\lambda$ is due to scattering from bound electrons or whole atoms. This separation is said to be the **Compton Shift**.  

Compton effect is the term used for this change in wavelength of X-rays after being scattered off some materials such as graphite than that of the incident wavelength.  Classical electromagnetic theory predicts that scattering from a free electron should not produce the observed angle-dependent change in wavelength.

To explain this, Compton used Einstein's idea of light as a particle and this strengthened the concept of photon. He treated both electrons and photons as relativistic particles and that the collision obeys the conversation of linear momentum and the conservation of total relativistic energy. 

$$\vec{p_f} \cdot \vec{\tilde{p_f}} = p_f \tilde{p}_f \cos(\theta)$$ $$E_f + m_0c^2 = \tilde{E_f} + E$$
$$\vec{p_f} = \vec{\tilde{p_f}} + \vec{p}$$
where $\vec{p_f}$ denotes the momentum of photon before the collision, $\vec{\tilde{p_f}}$ denotes the momentum of photon immediately after the collision, $\theta$ the scattering angle, $E_f$ the energy of photon before collision, $\tilde{E_f}$ the energy of outgoing photon, $m_0$ the rest mass of electron and $E$ the energy of electron immediately after the collision.
Note that any particle in nature obeys relativistic energy equation according to special theory of relativity
$$E^2 = p^2c^2 + m_0^2c^4$$
On applying this relation to a photon which is massless, we obtain
$$p_f = \frac{E_f}{c}$$
Thus, we have $$p_f = \frac{h}{\lambda}$$

Now, with all this, on solving, we obtain $$\lambda' - \lambda = \frac{h}{m_0c} (1-\cos\theta)$$$h/m_0c = 2.43 pm$ and thus, $\Delta \lambda = \lambda_c(1-\cos \theta)$.

This was found to be highly consistent with the experimental results. If the electron is tightly bound to the atom, the recoil can effectively involve the atom as a whole. In the extreme case, the relevant recoil mass is approximately the mass of the atom rather than the electron, making the wavelength shift much smaller.

The Compton effect provided strong experimental evidence that photons carry momentum $p = h/\lambda$ and therefore strengthened the particle description of light. 